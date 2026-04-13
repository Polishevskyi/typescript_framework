import { type Locator } from '@playwright/test';
import BasePage from './BasePage.js';

class CartPage extends BasePage {
  private readonly cartItem: Locator = this.page.locator('.cart_item');
  private readonly cartItemName: Locator = this.page.locator('.inventory_item_name');
  private readonly continueShoppingButton: Locator = this.page.locator('#continue-shopping');
  private readonly checkoutButton: Locator = this.page.locator('#checkout');

  async waitForCartPage(): Promise<void> {
    await this.cartItem
      .first()
      .waitFor({ state: 'attached' })
      .catch(() => {});
    await this.continueShoppingButton.waitFor({ state: 'visible' });
  }

  async removeProduct(productName: string): Promise<void> {
    await this.page.locator(`[data-test="remove-${productName}"]`).click();
  }

  async clickContinueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }

  async clickCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }

  async getItemsCount(): Promise<number> {
    return this.cartItem.count();
  }

  async getItemsNames(): Promise<string[]> {
    return this.cartItemName.allTextContents();
  }
}

export { CartPage };
