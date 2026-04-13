import * as base from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import DataGenerator from '../../utils/dataGenerator.js';
import { WebConstants } from '../../utils/constants.js';
import { wrapInAllureStep } from '../../utils/allureProxy.js';

type App = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

export const test = base.test.extend<{
  app: App;
  loggedInProductsPage: ProductsPage;
  constants: typeof WebConstants;
  dataGenerator: typeof DataGenerator;
}>({
  app: async ({ page }, use) => {
    await use({
      loginPage: wrapInAllureStep(new LoginPage(page)),
      productsPage: wrapInAllureStep(new ProductsPage(page)),
      cartPage: wrapInAllureStep(new CartPage(page)),
      checkoutPage: wrapInAllureStep(new CheckoutPage(page)),
    });
  },

  loggedInProductsPage: async ({ app }, use) => {
    await app.productsPage.navigateTo();
    await use(app.productsPage);
  },

  constants: async ({}, use) => {
    await use(WebConstants);
  },

  dataGenerator: async ({}, use) => {
    await use(DataGenerator);
  },
});

export const { expect } = base;
