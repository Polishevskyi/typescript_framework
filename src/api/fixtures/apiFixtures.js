import { test as base, expect } from '@playwright/test';

class SoftAssertions {
  constructor() {
    this.errors = [];
  }

  assertThat(actual) {
    return {
      isNotNull: () => {
        if (actual === null || actual === undefined) {
          this.errors.push(`Expected value to be not null, but was ${actual}`);
        }
      },
      isEqualTo: (expected) => {
        if (actual !== expected) {
          this.errors.push(`Expected ${expected}, but got ${actual}`);
        }
      },
      isNotNullAndEqualTo: (expected) => {
        if (actual === null || actual === undefined) {
          this.errors.push(`Expected value to be not null, but was ${actual}`);
        } else if (actual !== expected) {
          this.errors.push(`Expected ${expected}, but got ${actual}`);
        }
      },
    };
  }

  assertAll() {
    if (this.errors.length > 0) {
      throw new Error(`Soft assertions failed:\n${this.errors.join('\n')}`);
    }
  }
}

const test = base.extend({
  softly: async ({}, use) => {
    const softly = new SoftAssertions();
    await use(softly);
    softly.assertAll();
  },
});

export { test, expect };
