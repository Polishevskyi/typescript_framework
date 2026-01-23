# 🚀 Mobile, Web & API Test Automation Framework

**Comprehensive test automation framework for API, Web, and Mobile testing with TypeScript, Playwright, WebdriverIO, Appium, and Allure reporting**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.48.0-green.svg)](https://playwright.dev/)
[![WebdriverIO](https://img.shields.io/badge/WebdriverIO-8.16.12-orange.svg)](https://webdriver.io/)
[![Appium](https://img.shields.io/badge/Appium-3.0.0-purple.svg)](https://appium.io/)
[![Mocha](https://img.shields.io/badge/Mocha-11.1.0-brown.svg)](https://mochajs.org/)
[![Allure](https://img.shields.io/badge/Allure-2.32.0-red.svg)](https://allure-framework.github.io/)
[![Faker](https://img.shields.io/badge/Faker-9.0.3-yellow.svg)](https://fakerjs.dev/)
[![Zod](https://img.shields.io/badge/Zod-4.3.5-blue.svg)](https://zod.dev/)
[![BrowserStack](https://img.shields.io/badge/BrowserStack-9.20.0-blue.svg)](https://www.browserstack.com/)
[![ESLint](https://img.shields.io/badge/ESLint-8.57.1-purple.svg)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.3.3-pink.svg)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/Husky-9.1.7-lightgrey.svg)](https://typicode.github.io/husky/)

---

## 🎯 Project Description

Comprehensive test automation framework for **API**, **Web**, and **Mobile** testing with:

- **API Testing** - Playwright API with PetStore API (Swagger)
- **Web Testing** - Playwright with multi-browser support (Chromium, Firefox, WebKit) and multiple viewports (Desktop, Mobile, Tablet)
- **Mobile Testing** - WebdriverIO + Appium with BrowserStack cloud and local execution (Android/iOS)
- **Reporting** - Allure Reports with GitHub Pages deployment
- **CI/CD** - GitHub Actions workflows with automatic test execution
- **Notifications** - Telegram integration for test results
- **Code Quality** - ESLint, Prettier, and Husky pre-commit hooks
- **Type Safety** - TypeScript with Zod schema validation

Built on clean architecture principles using modern design patterns (Singleton, Factory, Builder, Page Object Model, Strategy) for scalability, maintainability, and reliability.

---

## 🏗️ Architecture & Structure

### 📁 Project Structure

```
typescript_framework/
├── 📁 main/
│   ├── 📁 api/                          # API Testing
│   │   ├── 📁 http/                     # HTTP Client
│   │   │   ├── apiHttpClient.ts         # HTTP client wrapper
│   │   │   ├── endpoint.ts              # Endpoint definitions
│   │   │   ├── 📁 client/               # CRUD requesters
│   │   │   │   └── crudRequester.ts     # Generic CRUD operations
│   │   │   └── 📁 specs/                # Request/Response specifications
│   │   │       └── responseSpecs.ts     # Response validators
│   │   ├── 📁 schemas/                  # Zod Schemas
│   │   │   ├── petSchema.ts             # Pet request/response schemas
│   │   │   ├── petCategorySchema.ts     # Category schema
│   │   │   └── petTagSchema.ts          # Tag schema
│   │   ├── 📁 steps/                    # Step definitions
│   │   │   └── petSteps.ts              # Pet API steps
│   │   └── 📁 fixtures/                 # Test fixtures
│   │       └── baseTest.ts              # Base API test setup
│   ├── 📁 web/                          # Web Testing
│   │   ├── 📁 pages/                    # Page Object Model
│   │   │   ├── BasePage.ts              # Base page class
│   │   │   ├── LoginPage.ts             # Login page
│   │   │   ├── ProductsPage.ts          # Products page
│   │   │   ├── CartPage.ts              # Cart page
│   │   │   └── CheckoutPage.ts          # Checkout page
│   │   └── 📁 fixtures/                 # Test fixtures
│   │       └── baseTest.ts              # Base web test setup
│   ├── 📁 mobile/                       # Mobile Testing
│   │   ├── 📁 driver/                   # Driver management
│   │   │   └── capabilitiesFactory.ts   # Capabilities factory
│   │   ├── 📁 screens/                  # Page Object Model
│   │   │   ├── BaseScreen.ts            # Base screen class
│   │   │   ├── LoginScreen.ts           # Login screen
│   │   │   ├── ProductsScreen.ts        # Products screen
│   │   │   ├── CartScreen.ts            # Cart screen
│   │   │   └── MenuScreen.ts            # Menu screen
│   │   └── 📁 fixtures/                 # Test fixtures
│   │       └── baseTest.ts              # Base mobile test setup
│   └── 📁 utils/                        # Utility classes
│       ├── constants.ts                 # Constants
│       ├── dataGenerator.ts             # Test data generation (Faker)
│       └── allureProxy.ts               # Allure integration
├── 📁 tests/
│   ├── 📁 api/                          # API Tests
│   │   ├── createPet.test.ts            # Create pet tests
│   │   ├── getPet.test.ts               # Get pet tests
│   │   ├── updatePet.test.ts            # Update pet tests
│   │   └── deletePet.test.ts            # Delete pet tests
│   ├── 📁 web/                          # Web Tests
│   │   ├── login.test.ts                # Login tests
│   │   ├── shopping.test.ts             # Shopping tests
│   │   └── checkout.test.ts             # Checkout tests
│   └── 📁 mobile/                       # Mobile Tests
│       ├── login.test.ts                # Login tests
│       ├── login-negative.test.ts       # Negative login tests
│       ├── cart.test.ts                 # Cart tests
│       └── sort-goods.test.ts           # Sort tests
├── 📁 .github/
│   └── 📁 workflows/                    # GitHub Actions
│       ├── all-tests.yml                # Run all tests
│       ├── api-tests.yml                # API tests only
│       ├── web-tests.yml                # Web tests only
│       └── mobile-tests.yml             # Mobile tests only
├── 📁 .husky/                           # Git hooks
│   ├── pre-commit                       # Lint and format before commit
│   └── pre-push                         # Run tests before push
├── .env                                 # Environment variables
├── .env.example                         # Environment variables template
├── GITHUB_SECRETS.example               # GitHub Secrets template
├── playwright.config.ts                 # Playwright configuration
├── wdio.mobile.conf.ts                  # WebdriverIO configuration
├── tsconfig.json                        # TypeScript configuration
├── .eslintrc.json                       # ESLint configuration
├── .prettierrc                          # Prettier configuration
├── package.json                         # Dependencies and scripts
├── send-telegram-notification.sh        # Telegram notification script
└── README.md                            # Project documentation
```

---

## 🛠️ Technology Stack

### 🎯 Core Technologies

| Category           | Technology        | Version  | Purpose                  |
| ------------------ | ----------------- | -------- | ------------------------ |
| **Language**       | TypeScript        | 5.5      | Programming language     |
| **Runtime**        | Node.js           | 18+      | JavaScript runtime       |
| **Package Mgr**    | npm               | -        | Dependency management    |
| **Web Testing**    | Playwright        | 1.48.0   | Web UI automation        |
| **Mobile Testing** | WebdriverIO       | 8.16.12  | Mobile app automation    |
| **Mobile Driver**  | Appium            | 3.0.0    | Mobile automation server |
| **Test Framework** | Mocha             | 11.1.0   | Test framework (Mobile)  |
| **Assertions**     | Playwright Expect | Built-in | Fluent assertions        |
| **Validation**     | Zod               | 4.3.5    | Schema validation        |
| **Reporting**      | Allure            | 2.32.0   | Detailed test reporting  |
| **Cloud Testing**  | BrowserStack      | 9.20.0   | Cloud testing platform   |

### 🔧 Additional Tools

| Tool                    | Version | Purpose                          |
| ----------------------- | ------- | -------------------------------- |
| **@faker-js/faker**     | 9.0.3   | Test data generation             |
| **dotenv**              | 16.4.5  | Environment variables management |
| **http-status-codes**   | 2.3.0   | HTTP status code constants       |
| **ESLint**              | 8.57.1  | Code linting                     |
| **Prettier**            | 3.3.3   | Code formatting                  |
| **Husky**               | 9.1.7   | Git hooks                        |
| **lint-staged**         | 16.2.6  | Pre-commit linting               |
| **ts-node**             | 10.9.2  | TypeScript execution             |
| **Appium UIAutomator2** | 3.7.0   | Android driver                   |
| **Appium XCUITest**     | 10.17.1 | iOS driver                       |

---

## 🌐 Supported Platforms

**Mobile:** Android 12.0+ / iOS 18.0+ (Local & BrowserStack Cloud)  
**API:** PetStore API (Swagger) - https://petstore.swagger.io/v2 (REST/JSON)  
**Web:** Chromium, Firefox, WebKit (Desktop/Mobile/Tablet) - SauceDemo - https://www.saucedemo.com

---

## 🎨 Design Patterns

### Creational Patterns

#### 1. Singleton

```typescript
// playwright.config.ts
import { config } from 'dotenv';

config(); // Singleton - loads environment variables once for entire application

export default defineConfig({
  use: {
    baseURL: process.env.WEB_BASE_URL!,
    headless: process.env.WEB_HEADLESS === 'true',
  },
});
```

---

#### 2. Factory Method

```typescript
// main/mobile/driver/capabilitiesFactory.ts
export class CapabilitiesFactory {
  static createCapabilities(): Capability[] {
    const platform = process.env.MOBILE_PLATFORM!;
    const isCloud = process.env.MOBILE_IS_CLOUD === 'true';

    if (platform === 'android') {
      return [isCloud ? this.createAndroidCloudCapabilities() : this.createAndroidLocalCapabilities()];
    }
    return [isCloud ? this.createIosCloudCapabilities() : this.createIosLocalCapabilities()];
  }
}
```

---

#### 3. Abstract Factory

```typescript
// main/mobile/driver/capabilitiesFactory.ts
export class CapabilitiesFactory {
  private static createAndroidLocalCapabilities(): Capability {
    return {
      platformName: 'Android',
      'appium:deviceName': process.env.ANDROID_LOCAL_DEVICE_NAME!,
      'appium:platformVersion': process.env.ANDROID_LOCAL_PLATFORM_VERSION!,
      'appium:automationName': 'UiAutomator2',
      'appium:appPackage': process.env.ANDROID_LOCAL_APP_PACKAGE!,
      'appium:appActivity': process.env.ANDROID_LOCAL_APP_ACTIVITY!,
    };
  }

  private static createAndroidCloudCapabilities(): Capability {
    return {
      platformName: 'Android',
      'appium:deviceName': process.env.ANDROID_CLOUD_DEVICE_NAME!,
      'appium:platformVersion': process.env.ANDROID_CLOUD_PLATFORM_VERSION!,
      'appium:app': process.env.BROWSERSTACK_ANDROID_APP!,
      'bstack:options': this.getBrowserStackOptions(),
    };
  }

  private static createIosLocalCapabilities(): Capability {
    /* ... */
  }
  private static createIosCloudCapabilities(): Capability {
    /* ... */
  }
}
```

---

#### 4. Builder

```typescript
// main/utils/dataGenerator.ts
export class PetDataGenerator {
  static generatePetRequest(overrides: Partial<PetRequest> = {}): PetRequest {
    return {
      id: faker.number.int({ min: 1, max: 100000 }),
      category: this.generateCategory(),
      name: faker.person.firstName(),
      photoUrls: [faker.image.urlLoremFlickr({ category: 'animals' })],
      tags: [this.generateTag()],
      status: faker.helpers.arrayElement(['available', 'pending', 'sold']),
      ...overrides,
    };
  }

  static generatePetWithUniquePrefix(prefix: string): PetRequest {
    return this.generatePetRequest({
      name: `${prefix}_${faker.string.alphanumeric(8)}`,
    });
  }
}
```

---

#### 5. Prototype

```typescript
// main/utils/dataGenerator.ts
export class PetDataGenerator {
  static generatePetUpdate(existingPet: PetResponse | PetRequest): PetRequest {
    return {
      ...existingPet,
      name: faker.animal.type(),
      status: faker.helpers.arrayElement(['available', 'pending', 'sold']),
    } as PetRequest;
  }
}
```

---

### Structural Patterns

#### 6. Adapter

```typescript
// main/api/http/apiHttpClient.ts + client/crudRequester.ts
class ApiHttpClient {
  protected requestContext: APIRequestContext;
  protected baseURL: string;
  protected defaultHeaders: Record<string, string>;

  constructor(requestContext: APIRequestContext, endpoint, responseValidator) {
    this.requestContext = requestContext;
    this.baseURL = process.env.API_BASE_URL || '';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
}

class ResourceClient extends ApiHttpClient {
  async create(body: RequestBody): Promise<APIResponse> {
    const url = `${this.baseURL}${this.endpoint.getUrl()}`;
    const response = await this.requestContext.post(url, {
      headers: this.defaultHeaders,
      data: body,
    });
    this.responseValidator.validate(response);
    return response;
  }

  async read(id: number): Promise<APIResponse> {
    /* ... */
  }
  async update(body: RequestBody): Promise<APIResponse> {
    /* ... */
  }
  async remove(id: number): Promise<APIResponse> {
    /* ... */
  }
}
```

---

#### 7. Decorator

```typescript
// main/utils/allureProxy.ts
export const wrapInAllureStepPlaywright = <T extends object>(instance: T): T =>
  new Proxy(instance, {
    get(target, propKey) {
      const originalValue = Reflect.get(target, propKey);
      if (typeof originalValue !== 'function') return originalValue;

      return async function asyncWrapper(...args: unknown[]) {
        const methodName = propKey.toString();
        const readableName = formatMethodName(methodName);
        const formattedArgs = args.map((arg) => formatArgument(arg, methodName));
        const stepLabel = formattedArgs.length > 0 ? `${readableName} (${formattedArgs.join(', ')})` : readableName;
        const stepName = `${target.constructor.name}: ${stepLabel}`;

        return test.step(stepName, async () => originalValue.apply(target, args));
      };
    },
  });
```

---

#### 8. Facade

```typescript
// main/api/http/specs/responseSpecs.ts
class ResponseValidator {
  private expectedStatuses: number[];

  constructor(expectedStatus: number | number[]) {
    this.expectedStatuses = Array.isArray(expectedStatus) ? expectedStatus : [expectedStatus];
  }

  validate(response: APIResponse): APIResponse {
    const status = response.status();
    if (!this.expectedStatuses.includes(status)) {
      throw new Error(`Expected status ${this.expectedStatuses.join(' or ')}, but got ${status}`);
    }
    return response;
  }
}

const ResponseValidators = {
  requestReturnsOKSpec(): ResponseValidator {
    return new ResponseValidator(StatusCodes.OK);
  },

  requestReturnsOKOrNotFoundSpec(): ResponseValidator {
    return new ResponseValidator([StatusCodes.OK, StatusCodes.NOT_FOUND]);
  },
} as const;
```

---

#### 9. Proxy

```typescript
// main/utils/allureProxy.ts
const createStepWrapper = (stepExecutor: StepExecutor) =>
  function wrapInAllureStep<T extends object>(instance: T): T {
    return new Proxy(instance, {
      get(target, propKey) {
        const originalValue = Reflect.get(target, propKey);
        if (typeof originalValue !== 'function') return originalValue;

        return async function asyncWrapper(...args: unknown[]) {
          const methodName = propKey.toString();
          const stepName = `${target.constructor.name}: ${formatMethodName(methodName)}`;

          return stepExecutor(stepName, async () => {
            if (methodName.toLowerCase().includes('pass')) {
              const maskedArgs = args.map(() => '********');
              console.log(`Calling ${stepName} with masked arguments`);
            }
            return originalValue.apply(target, args);
          });
        };
      },
    });
  };
```

---

### Behavioral Patterns

#### 10. Iterator

```typescript
// main/mobile/screens/ProductsScreen.ts
export class ProductsScreen extends BaseScreen {
  async getAllProductNames(): Promise<string[]> {
    const products = await $$('~store item text');
    const names: string[] = [];

    for (const product of products) {
      names.push(await product.getText());
    }

    return names;
  }

  async getFirstProductName(): Promise<string> {
    const products = await $$('~store item text');
    return products[0].getText();
  }
}
```

---

#### 11. Strategy

```typescript
// wdio.mobile.conf.ts
const isCloud = process.env.MOBILE_IS_CLOUD === 'true';

const localStrategy = {
  serverUrl: process.env.APPIUM_LOCAL_URL!,
  services: [],
  maxInstances: 1,
};

const cloudStrategy = {
  serverUrl: process.env.BROWSERSTACK_HUB_URL!,
  services: ['browserstack'],
  maxInstances: 4,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
};

const serverUrl = new URL(isCloud ? cloudStrategy.serverUrl : localStrategy.serverUrl);

export const config: Options.Testrunner = {
  hostname: serverUrl.hostname,
  services: isCloud ? cloudStrategy.services : localStrategy.services,
  maxInstances: isCloud ? cloudStrategy.maxInstances : localStrategy.maxInstances,
};
```

---

#### 12. Template Method

```typescript
// main/mobile/screens/BaseScreen.ts
export class BaseScreen {
  protected async assertElementIsVisible(
    selector: string,
    timeout = MobileConstants.TIMEOUTS.DEFAULT_TIMEOUT
  ): Promise<WebdriverIO.Element> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    return element;
  }

  protected async setValue(selector: string, text: string): Promise<void> {
    const element = await this.assertElementIsVisible(selector);
    await element.clearValue();
    await element.setValue(text);
  }

  protected async tapWhenVisible(selector: string): Promise<void> {
    const element = await this.assertElementIsVisible(selector);
    await element.click();
  }
}

export class LoginScreen extends BaseScreen {
  async login(username: string, password: string): Promise<void> {
    await this.setValue('~Username input field', username);
    await this.setValue('~Password input field', password);
    await this.tapWhenVisible('~Login button');
  }
}
```

---

## 🔐 Configuration & Secrets

### 📝 Configuration File

Create `.env` file in the project root based on [`.env.example`](.env.example).

### 🔑 GitHub Secrets

Configure secrets in GitHub (Settings → Secrets and variables → Actions) based on [`GITHUB_SECRETS.example`](GITHUB_SECRETS.example).

---

## 🚀 Quick Start

### 📋 Prerequisites

- **Node.js** >= 18.0.0
- **npm** (comes with Node.js)
- **Appium** >= 3.0 (for local mobile testing)
- **BrowserStack account** (for cloud testing)
- **Android Studio** (for local Android testing)
- **Xcode** (for local iOS testing)

### ⚡ Installation

```bash
# Clone repository
git clone <repository-url>
cd typescript_framework

# Install dependencies
npm ci

# Copy environment variables
cp .env.example .env

# Edit configuration
nano .env  # or any editor

# Install Appium (if running mobile tests locally)
npm install -g appium
appium driver install uiautomator2  # Android
appium driver install xcuitest      # iOS

# Install Playwright browsers (for web tests)
npx playwright install --with-deps
```

### 🎯 First Run

```bash
# Run all API tests
npm run test:api

# Run all Web tests (all browsers and viewports)
npm run test:web

# Run all Mobile tests
npm run test:mobile

# Run specific test file
npx playwright test tests/api/createPet.test.ts
npx playwright test tests/web/login.test.ts
npx wdio run wdio.mobile.conf.ts --spec tests/mobile/login.test.ts
```

---

## 🔄 Parallel Execution

### Web Tests (Playwright)

Configured in [`playwright.config.ts`](playwright.config.ts):

```typescript
export default defineConfig({
  fullyParallel: true, // Run tests in parallel
  workers: 5, // Number of parallel workers
  retries: 3, // Retry failed tests 3 times

  projects: [
    // 9 projects (3 browsers × 3 viewports)
    'chromium-desktop',
    'chromium-mobile',
    'chromium-tablet',
    'firefox-desktop',
    'firefox-mobile',
    'firefox-tablet',
    'webkit-desktop',
    'webkit-mobile',
    'webkit-tablet',
  ],
});
```

### Mobile Tests (WebdriverIO)

Configured in [`wdio.mobile.conf.ts`](wdio.mobile.conf.ts):

```typescript
export const config: Options.Testrunner = {
  maxInstances: isCloud ? 4 : 1, // 4 parallel on cloud, 1 on local

  mochaOpts: {
    timeout: 120_000,
    retries: 3, // Retry failed tests 3 times
  },
};
```

---

## 📊 Reporting

### 🎨 Allure Reports

```bash
# Generate and open report locally
npm run allure:report

# Generate report only
npm run allure:generate

# Clean previous results
npm run allure:clean
```

### 🔔 Telegram Notifications

Automatic notifications about test results via `send-telegram-notification.sh`:

- 🟢 **Success** - all tests passed (0 failed)
- 🔴 **Failed** - some tests failed (> 0 failed)
- 🟡 **No Tests** - no tests executed

```bash
# Send notification manually
./send-telegram-notification.sh
```

---

## 🔄 CI/CD Integration

### 🚀 GitHub Actions

Four workflows available:

1. **All Tests** ([`all-tests.yml`](.github/workflows/all-tests.yml))
   - **Trigger:** Manual only (`workflow_dispatch`)
   - **Jobs:** Lint → API Tests + Web Tests + Mobile Tests → Combined Report
   - **Features:** Platform selection (Android/iOS), combined Allure report

2. **API Tests** ([`api-tests.yml`](.github/workflows/api-tests.yml))
   - **Trigger:** Push/PR to API files, manual
   - **Jobs:** Lint → API Tests → Allure Report → Telegram
   - **Parallel:** Multiple workers

3. **Web Tests** ([`web-tests.yml`](.github/workflows/web-tests.yml))
   - **Trigger:** Push/PR to Web files, manual
   - **Jobs:** Lint → Web Tests → Allure Report → Telegram
   - **Parallel:** 9 projects (3 browsers × 3 viewports)

4. **Mobile Tests** ([`mobile-tests.yml`](.github/workflows/mobile-tests.yml))
   - **Trigger:** Push/PR to Mobile files, manual
   - **Jobs:** Lint → Mobile Tests (BrowserStack) → Allure Report → Telegram
   - **Parallel:** 4 instances on BrowserStack
   - **Features:** Platform selection (Android/iOS)

**All workflows include:**

- ✅ Lint and format checks
- ✅ Test execution with retries
- ✅ Allure report generation
- ✅ GitHub Pages deployment
- ✅ Telegram notifications
- ✅ Artifacts upload (test results, videos, screenshots)

---

## 📝 Code Formatting

### ESLint

```bash
# Check linting errors
npm run lint:check

# Fix linting errors automatically
npm run lint
```

**Configuration:** [`.eslintrc.json`](.eslintrc.json)

- Airbnb TypeScript style guide
- Playwright plugin
- Prettier integration

### Prettier

```bash
# Check code formatting
npm run format:check

# Format code automatically
npm run format
```

**Configuration:** [`.prettierrc`](.prettierrc)

### Git Hooks (Husky)

**Pre-commit:** Lint and format staged files

```bash
# Configured in .husky/pre-commit
lint-staged
```

**Pre-push:** Run tests before pushing

```bash
# Configured in .husky/pre-push
npm run lint:check && npm run format:check
```

---

## 🔧 Appium Setup

### Local Appium Server

```bash
# Install Appium globally
npm install -g appium

# Install drivers
appium driver install uiautomator2  # Android
appium driver install xcuitest      # iOS

# Start Appium server
appium

# Stop Appium server (if needed)
killall node
```

### BrowserStack Setup

1. Create account: https://www.browserstack.com/
2. Upload apps:

   ```bash
   # Upload Android app
   curl -u "USERNAME:ACCESS_KEY" \
     -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
     -F "file=@/path/to/app.apk"

   # Upload iOS app
   curl -u "USERNAME:ACCESS_KEY" \
     -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
     -F "file=@/path/to/app.ipa"
   ```

3. Copy app IDs (bs://...) to `.env`

### Appium Inspector Configuration

#### Android Local

```json
{
  "platformName": "Android",
  "appium:deviceName": "Pixel 4",
  "appium:platformVersion": "14",
  "appium:automationName": "UiAutomator2"
}
```

#### iOS Local

```json
{
  "platformName": "iOS",
  "appium:deviceName": "iPhone 16 Plus",
  "appium:platformVersion": "18.6",
  "appium:automationName": "XCUITest",
  "appium:udid": "YOUR_DEVICE_UDID"
}
```

> **Note:** For iOS Local, you need to specify the `appium:udid` of your physical device or simulator. You can find the UDID using:
>
> - **Simulator:** `xcrun simctl list devices`
> - **Physical device:** Connect device and check in Xcode → Window → Devices and Simulators

---

## 📦 Dependencies

All dependencies are managed via npm in [`package.json`](package.json):

**Core Testing:**

- **@playwright/test** - Web and API testing framework
- **webdriverio** - Mobile testing framework
- **@wdio/cli** - WebdriverIO CLI
- **@wdio/mocha-framework** - Mocha integration
- **appium** - Mobile automation server
- **appium-uiautomator2-driver** - Android driver
- **appium-xcuitest-driver** - iOS driver

**Reporting:**

- **allure-playwright** - Allure for Playwright
- **@wdio/allure-reporter** - Allure for WebdriverIO
- **allure-commandline** - Allure CLI

**Utilities:**

- **@faker-js/faker** - Test data generation
- **zod** - Schema validation
- **dotenv** - Environment variables
- **http-status-codes** - HTTP status constants

**Code Quality:**

- **typescript** - Type safety
- **eslint** - Linting
- **prettier** - Formatting
- **husky** - Git hooks
- **lint-staged** - Pre-commit checks

**Cloud Testing:**

- **@wdio/browserstack-service** - BrowserStack integration
- **@wdio/appium-service** - Appium service

---

<div align="center">

**Made with ❤️ by Polishevskyi**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Polishevskyi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/polishevskyi/)

</div>
