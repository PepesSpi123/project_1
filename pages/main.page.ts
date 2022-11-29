import { Locator, Page } from '@playwright/test';

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

    async goto(){
        await this.page.goto(this.url);
    }
}

