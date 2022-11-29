import {  Locator, Page } from '@playwright/test';

export class PasswordRecoveryPage {

    readonly page: Page;
    readonly inputEmail: Locator
    readonly submitBtn: Locator
    readonly message: Locator

    constructor(page: Page) {
        this.page = page;
        this.inputEmail = page.locator('#mail');
        this.submitBtn = page.locator('[type="submit"]')
        this.message = page.locator('#flash_notice')
    }
async recoverPassword(){
    await this.inputEmail.fill('irena.tv133@gmail.com')
    await this.submitBtn.click()

}
}