import { test, expect } from '../../main/web/fixtures/baseTest.js';

test.describe('Shopping cart functionality', () => {
  test('Verify that user can add multiple products to cart and remove one', async ({
    loggedInProductsPage,
    cartPage,
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
    await cartPage.waitForCartPage();
    await expect.soft(cartPage.pageTitle).toHaveText(PAGE_TITLES.YOUR_CART);
    expect.soft(await cartPage.getItemsCount()).toBe(3);

    const items = await cartPage.getItemsNames();
    expect.soft(items).toContain(PRODUCT_NAMES.BACKPACK);
    expect.soft(items).toContain(PRODUCT_NAMES.BIKE_LIGHT);
    expect.soft(items).toContain(PRODUCT_NAMES.BOLT_TSHIRT);

    await cartPage.removeProduct(PRODUCT_IDS.BIKE_LIGHT);
    expect.soft(await cartPage.getItemsCount()).toBe(2);

    await cartPage.clickContinueShopping();
    await expect.soft(loggedInProductsPage.pageTitle).toHaveText(PAGE_TITLES.PRODUCTS);
    await expect.soft(loggedInProductsPage.shoppingCartBadge).toHaveText('2');
  });
});
