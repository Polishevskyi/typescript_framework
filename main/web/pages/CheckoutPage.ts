import { type Locator } from '@playwright/test';
import BasePage from './BasePage.js';

class CheckoutPage extends BasePage {
  readonly completeHeader: Locator = this.page.locator('.complete-header');
  readonly completeText: Locator = this.page.locator('.complete-text');
  private readonly firstNameInput: Locator = this.page.locator('#first-name');
  private readonly lastNameInput: Locator = this.page.locator('#last-name');
  private readonly postalCodeInput: Locator = this.page.locator('#postal-code');
  private readonly continueButton: Locator = this.page.locator('#continue');
  private readonly finishButton: Locator = this.page.locator('#finish');
  private readonly backHomeButton: Locator = this.page.locator('#back-to-products');

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }

  async waitForFinishButton(): Promise<void> {
    await this.finishButton.waitFor({ state: 'visible' });
  }

  async clickFinish(): Promise<void> {
    await this.finishButton.click();
  }

  async clickBackHome(): Promise<void> {
    await this.backHomeButton.click();
  }

  async waitForCheckoutForm(): Promise<void> {
    await this.firstNameInput.waitFor({ state: 'visible' });
  }

  async waitForCompletePage(): Promise<void> {
    await this.completeHeader.waitFor({ state: 'visible' });
  }
}

export { CheckoutPage };
