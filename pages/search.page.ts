import {  Locator, Page } from '@playwright/test';

export class SearchPage {
    readonly page: Page
    readonly searchField: Locator
    readonly issuesField: Locator
    readonly messagesField: Locator
    readonly commitBtn: Locator
    readonly searchResults: Locator

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('#search-input')
        this.issuesField = page.locator('#issues')
        this.messagesField = page.locator('#messages')   
        this.commitBtn = page.locator('[name="commit"]') 
        this.searchResults = page.locator('#search-results-counts')
    }
    
    async usingFilters(){
        await this.issuesField.click();
        await this.messagesField.click()
        await this.commitBtn.click()
    }
}