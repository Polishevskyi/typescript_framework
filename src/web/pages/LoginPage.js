import BasePage, { BASE_LOCATORS } from './BasePage.js';

const LOGIN_PAGE_LOCATORS = {
  usernameInput: '#user-name',
  passwordInput: '#password',
  loginButton: '#login-button',
  ...BASE_LOCATORS,
  errorButton: '.error-button',
};

class LoginPage extends BasePage {
  async fillLoginCredentials(username, password) {
    await this.setValue(LOGIN_PAGE_LOCATORS.usernameInput, username);
    await this.setValue(LOGIN_PAGE_LOCATORS.passwordInput, password);
  }

  async login(username, password) {
    await this.fillLoginCredentials(username, password);
    await this.tapWhenVisible(LOGIN_PAGE_LOCATORS.loginButton);
  }

  async assertLoginPageDisplayed() {
    await this.assertElementIsVisible(LOGIN_PAGE_LOCATORS.usernameInput);
    await this.assertElementIsVisible(LOGIN_PAGE_LOCATORS.passwordInput);
    await this.assertElementIsVisible(LOGIN_PAGE_LOCATORS.loginButton);
  }
}

export { LoginPage, LOGIN_PAGE_LOCATORS };
