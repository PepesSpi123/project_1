import {  Locator, Page } from '@playwright/test';

export class LoginPage  {
    readonly page: Page;
    readonly inputUsername: Locator
    readonly inputPassword: Locator
    readonly submitBtn: Locator
    readonly content: Locator
    readonly lostPassword: Locator

constructor(page: Page) {

    this.page = page;
    this.inputUsername = page.locator('#username');
    this.inputPassword = page.locator('#password');
    this.submitBtn = page.locator('[type="submit"]')
    this.content = page.locator('#loggedas')
    this.lostPassword = page.locator('[href="/account/lost_password"]')
}
}