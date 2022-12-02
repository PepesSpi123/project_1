import {  Locator, Page, expect } from '@playwright/test';
import { MainPage } from './main.page';

export class LoginPage extends MainPage {
    readonly page: Page;
    readonly inputUsername: Locator
    readonly inputPassword: Locator
    readonly submitBtn: Locator
    readonly content: Locator
    readonly lostPassword: Locator

constructor(page: Page) {
    super(page);
    this.page = page;
    this.inputUsername = page.locator('#username');
    this.inputPassword = page.locator('#password');
    this.submitBtn = page.locator('[type="submit"]')
    this.content = page.locator('#loggedas')
    this.lostPassword = page.locator('[href="/account/lost_password"]')
}
async goToPassRecoveryPage(){
    await this.lostPassword.click()
    await expect(this.page).toHaveURL(/.*lost_password/);
}
async fillUserData(username, password){
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password)
    await expect(this.inputUsername).toHaveValue(username)
    await expect(this.inputPassword).toHaveValue(password)
}
async submitLogin() {
    await this.submitBtn.click()
}
}