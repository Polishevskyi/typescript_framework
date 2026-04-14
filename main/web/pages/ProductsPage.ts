import { type Locator } from '@playwright/test';
import BasePage from './BasePage.js';

class ProductsPage extends BasePage {
  protected readonly url: string = '/inventory.html';
  public readonly shoppingCartBadge: Locator = this.page.locator('.shopping_cart_badge');
  private readonly shoppingCartLink: Locator = this.page.locator('.shopping_cart_link');
  private readonly burgerMenu: Locator = this.page.locator('#react-burger-menu-btn');
  private readonly logoutLink: Locator = this.page.locator('#logout_sidebar_link');

  async logout(): Promise<void> {
    await this.burgerMenu.click();
    await this.logoutLink.waitFor({ state: 'visible' });
    await this.logoutLink.click();
  }

  async addProduct(productId: string): Promise<void> {
    await this.page.locator(`[data-test="add-to-cart-${productId}"]`).click();
  }

  async clickShoppingCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }

  async waitForShoppingCartBadgeHidden(): Promise<void> {
    await this.shoppingCartBadge.waitFor({ state: 'hidden' });
  }
}

export { ProductsPage };
