import { test, expect } from '../../main/web/fixtures/baseTest.js';

test.describe('Login and logout functionality', () => {
  test('Verify that user can successfully login and logout', async ({ loggedInProductsPage, loginPage, constants }) => {
    await expect.soft(loggedInProductsPage.pageTitle).toHaveText(constants.PAGE_TITLES.PRODUCTS);
    await loggedInProductsPage.logout();
    await loginPage.waitForLoginPage();
  });
});
