import { type Locator } from '@playwright/test';
import BasePage from './BasePage.js';

class LoginPage extends BasePage {
  private readonly usernameInput: Locator = this.page.locator('#user-name');
  private readonly passwordInput: Locator = this.page.locator('#password');
  private readonly loginButton: Locator = this.page.locator('#login-button');

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async waitForLoginPage(): Promise<void> {
    await Promise.all([
      this.usernameInput.waitFor({ state: 'visible' }),
      this.passwordInput.waitFor({ state: 'visible' }),
      this.loginButton.waitFor({ state: 'visible' }),
    ]);
  }
}

export { LoginPage };
