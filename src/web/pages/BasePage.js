import { expect } from '@playwright/test';
import Constants from '../../utils/constants.js';

const BASE_LOCATORS = {
  pageTitle: '.title',
};

class BasePage {
  constructor(page) {
    this.page = page;
  }

  goto(url) {
    return this.page.goto(url);
  }

  async assertElementIsVisible(selector, timeout = Constants.TIMEOUTS.DEFAULT_TIMEOUT) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout });
    return this.page.locator(selector);
  }

  async assertElementIsNotVisible(selector, timeout = Constants.TIMEOUTS.DEFAULT_TIMEOUT) {
    await this.page.waitForSelector(selector, { state: 'hidden', timeout });
  }

  async tapWhenVisible(selector, timeout = Constants.TIMEOUTS.DEFAULT_TIMEOUT) {
    const element = await this.assertElementIsVisible(selector, timeout);
    return element.click();
  }

  async setValue(selector, text, timeout = Constants.TIMEOUTS.DEFAULT_TIMEOUT) {
    const element = await this.assertElementIsVisible(selector, timeout);
    return element.fill(text);
  }

  async getElementText(selector, timeout = Constants.TIMEOUTS.DEFAULT_TIMEOUT) {
    const element = await this.assertElementIsVisible(selector, timeout);
    return element.textContent();
  }

  async assertElementTextEquals(selector, expectedText, timeout = Constants.TIMEOUTS.DEFAULT_TIMEOUT) {
    const element = await this.assertElementIsVisible(selector, timeout);
    const actualText = await element.textContent();

    if (actualText !== expectedText) {
      throw new Error(Constants.ERROR_MESSAGES.textAssertionFailed(selector, expectedText, actualText));
    }
    return element;
  }

  async assertContainsText(selector, text) {
    return expect(this.page.locator(selector)).toContainText(text);
  }

  async waitForUrl(urlPart) {
    return this.page.waitForURL(`**/${urlPart}**`);
  }

  async getElementCount(selector) {
    return this.page.locator(selector).count();
  }

  async getAllTexts(selector) {
    return this.page.locator(selector).allTextContents();
  }

  assertArrayContains(array, item) {
    expect(array).toContain(item);
  }

  assertEqual(actual, expected) {
    expect(actual).toBe(expected);
  }
}

export default BasePage;
export { BASE_LOCATORS };
