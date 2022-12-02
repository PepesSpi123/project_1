import {  Locator, Page, expect } from '@playwright/test';
import { LoginPage } from './login.page';


export class PasswordRecoveryPage extends LoginPage{

    readonly page: Page;
    readonly inputEmail: Locator
    readonly submitBtn: Locator
    readonly message: Locator

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.inputEmail = page.locator('#mail');
        this.submitBtn = page.locator('[type="submit"]')
        this.message = page.locator('#flash_notice')
    }
async fillEmail(email){
    await this.inputEmail.fill(email)
    await expect(this.inputEmail).toHaveValue(email)
}
async submitPassRecovery() {
    await this.submitBtn.click()
}
}
