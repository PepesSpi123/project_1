import { Locator, Page, expect } from '@playwright/test';

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
        await this.loginBtn.click()
        await expect(this.page).toHaveURL(/.*login/);
    }
    async goToRegistrationPage() {
        await this.registrationBtn.click()
        await expect(this.page).toHaveURL(/.*register/);
    }
    async executeSearch(text) {
        await this.searchField.fill(text);
        await this.searchField.press('Enter');
        await expect(this.page).toHaveURL(/.*search/);
       

    }
}

