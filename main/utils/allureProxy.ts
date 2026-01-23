import { test } from '@playwright/test';
import AllureReporter from '@wdio/allure-reporter';

type StepExecutor = (stepName: string, fn: () => Promise<unknown>) => Promise<unknown>;

const formatMethodName = (methodName: string): string =>
  methodName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();

const formatArgument = (arg: unknown, methodName: string): string => {
  const isPasswordMethod = methodName.toLowerCase().includes('pass');

  if (isPasswordMethod && typeof arg === 'string') {
    return '********';
  }

  if (typeof arg === 'object' && arg !== null) {
    if (isPasswordMethod) {
      const masked = Object.fromEntries(
        Object.entries(arg).map(([key, value]) => [key, key.toLowerCase().includes('pass') ? '********' : value])
      );
      return JSON.stringify(masked);
    }
    return JSON.stringify(arg);
  }

  return String(arg);
};

const createStepWrapper = (stepExecutor: StepExecutor) =>
  function wrapInAllureStep<T extends object>(instance: T): T {
    return new Proxy(instance, {
      get(target, propKey) {
        const originalValue = Reflect.get(target, propKey);
        if (typeof originalValue !== 'function') return originalValue;

        return async function asyncWrapper(...args: unknown[]) {
          const methodName = propKey.toString();
          const readableName = formatMethodName(methodName);
          const formattedArgs = args.map((arg) => formatArgument(arg, methodName));
          const stepLabel = formattedArgs.length > 0 ? `${readableName} (${formattedArgs.join(', ')})` : readableName;
          const stepName = `${target.constructor.name}: ${stepLabel}`;

          return stepExecutor(stepName, async () => originalValue.apply(target, args));
        };
      },
    });
  };

export const wrapInAllureStepPlaywright = <T extends object>(instance: T): T =>
  createStepWrapper((stepName, fn) => test.step(stepName, fn))(instance);

export const wrapInAllureStepWebdriverIO = <T extends object>(instance: T): T =>
  createStepWrapper(async (stepName, fn) => {
    try {
      AllureReporter.addStep(stepName);
      return await fn();
    } catch (error) {
      AllureReporter.addStep(`Failed: ${stepName}`, String(error));
      throw error;
    }
  })(instance);

export const wrapInAllureStep = wrapInAllureStepPlaywright;
