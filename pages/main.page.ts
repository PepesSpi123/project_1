import { Locator, Page } from '@playwright/test';

export class MainPage {
   
    readonly url = "https://www.redmine.org/";
    readonly page: Page
    readonly registrateBtn: Locator
    readonly loginBtn: Locator
    readonly searchField: Locator

constructor(page: Page) {
    this.page = page;
    this.registrateBtn = page.locator('[href="/account/register"]')
    this.loginBtn = page.locator('[href="/login"]')    
    this.searchField = page.locator('#q')
}

    async gotoMain(){
        await this.page.goto(this.url);
    }
    async gotoRegistr(){
        await this.page.goto(this.url);
        await this.registrateBtn.click()
    }
    async gotoLogin(){
        await this.page.goto(this.url);
        await this.loginBtn.click()
    }
    async gotoSearch(){
        await this.page.goto(this.url);
        await this.searchField.fill('Redmine')
        await this.searchField.press('Enter')
    }
}