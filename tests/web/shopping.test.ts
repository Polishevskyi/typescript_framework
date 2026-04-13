import { test, expect } from '../../main/web/fixtures/baseTest.js';

test.describe('Shopping cart functionality', () => {
  test('Verify that user can add multiple products to cart and remove one', async ({
    app,
    loggedInProductsPage,
    constants,
  }) => {
    const { PAGE_TITLES, PRODUCT_NAMES, PRODUCT_IDS } = constants;
    await expect.soft(loggedInProductsPage.pageTitle).toHaveText(PAGE_TITLES.PRODUCTS);

    await loggedInProductsPage.addProduct(PRODUCT_IDS.BACKPACK);
    await expect.soft(loggedInProductsPage.shoppingCartBadge).toHaveText('1');
    await loggedInProductsPage.addProduct(PRODUCT_IDS.BIKE_LIGHT);
    await expect.soft(loggedInProductsPage.shoppingCartBadge).toHaveText('2');
    await loggedInProductsPage.addProduct(PRODUCT_IDS.BOLT_TSHIRT);
    await expect.soft(loggedInProductsPage.shoppingCartBadge).toHaveText('3');
    await loggedInProductsPage.clickShoppingCart();
    await app.cartPage.waitForCartPage();
    await expect.soft(app.cartPage.pageTitle).toHaveText(PAGE_TITLES.YOUR_CART);
    expect.soft(await app.cartPage.getItemsCount()).toBe(3);

    const items = await app.cartPage.getItemsNames();
    expect.soft(items).toContain(PRODUCT_NAMES.BACKPACK);
    expect.soft(items).toContain(PRODUCT_NAMES.BIKE_LIGHT);
    expect.soft(items).toContain(PRODUCT_NAMES.BOLT_TSHIRT);

    await app.cartPage.removeProduct(PRODUCT_IDS.BIKE_LIGHT);
    expect.soft(await app.cartPage.getItemsCount()).toBe(2);

    await app.cartPage.clickContinueShopping();
    await expect.soft(loggedInProductsPage.pageTitle).toHaveText(PAGE_TITLES.PRODUCTS);
    await expect.soft(loggedInProductsPage.shoppingCartBadge).toHaveText('2');
  });
});
