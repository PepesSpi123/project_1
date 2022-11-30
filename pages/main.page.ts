import { Locator, Page } from '@playwright/test';
import * as globalConst from '../const'

export class MainPage {
   
    readonly url = "https://www.redmine.org/";
    readonly page: Page
    readonly registrationBtn: Locator
    readonly loginBtn: Locator
    readonly searchField: Locator

constructor(page: Page) {
    this.page = page;
    this.registrationBtn = page.locator('[href="/account/register"]')
    this.loginBtn = page.locator('[href="/login"]')    
    this.searchField = page.locator('#q')
}

    async goToMain(){
        await this.page.goto(this.url);
    }
    async goToLoginPage() {
        await this.goToMain();
        await this.loginBtn.click()
    }
    async goToRegistrationPage() {
        await this.goToMain();
        await this.registrationBtn.click()
    }
    async goToSearchPage() {
        await this.goToMain();
        await this.searchField.fill(globalConst.search)
        await this.searchField.press('Enter')
    }
}

