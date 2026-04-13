import { type Locator, type Page } from '@playwright/test';

class BasePage {
  protected readonly page: Page;
  protected readonly url: string = '/';

  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
  }

  async navigateTo(): Promise<void> {
    await this.page.goto(this.url);
  }
}

export default BasePage;
