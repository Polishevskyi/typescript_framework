import { test, expect } from '../../main/web/fixtures/baseTest.js';

test.describe('Checkout functionality', () => {
  test('Verify that complete checkout process works with generated user data', async ({
    app,
    loggedInProductsPage,
    constants,
    dataGenerator,
  }) => {
    const { PAGE_TITLES, MESSAGES, PRODUCT_IDS } = constants;
    const userInfo = dataGenerator.generateUserInfo();
    await expect.soft(loggedInProductsPage.pageTitle).toHaveText(PAGE_TITLES.PRODUCTS);

    await loggedInProductsPage.addProduct(PRODUCT_IDS.BACKPACK);
    await expect.soft(loggedInProductsPage.shoppingCartBadge).toHaveText('1');
    await loggedInProductsPage.addProduct(PRODUCT_IDS.FLEECE_JACKET);
    await expect.soft(loggedInProductsPage.shoppingCartBadge).toHaveText('2');
    await loggedInProductsPage.clickShoppingCart();
    await app.cartPage.waitForCartPage();
    await expect.soft(app.cartPage.pageTitle).toHaveText(PAGE_TITLES.YOUR_CART);

    await app.cartPage.clickCheckout();
    await app.checkoutPage.waitForCheckoutForm();
    await expect.soft(app.checkoutPage.pageTitle).toHaveText(PAGE_TITLES.CHECKOUT_INFO);

    await app.checkoutPage.fillCheckoutInfo(userInfo.firstName, userInfo.lastName, userInfo.postalCode);
    await app.checkoutPage.clickContinue();
    await app.checkoutPage.waitForFinishButton();
    await expect.soft(app.checkoutPage.pageTitle).toHaveText(PAGE_TITLES.CHECKOUT_OVERVIEW);

    await app.checkoutPage.clickFinish();
    await app.checkoutPage.waitForCompletePage();
    await expect.soft(app.checkoutPage.completeHeader).toHaveText(PAGE_TITLES.ORDER_COMPLETE);
    await expect.soft(app.checkoutPage.completeText).toContainText(MESSAGES.ORDER_DISPATCHED);

    await app.checkoutPage.clickBackHome();
    await expect.soft(loggedInProductsPage.pageTitle).toHaveText(PAGE_TITLES.PRODUCTS);
    await loggedInProductsPage.waitForShoppingCartBadgeHidden();
  });
});
