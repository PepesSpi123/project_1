import {  Locator, Page } from '@playwright/test';
import { MainPage } from './main.page';

export class SearchPage extends MainPage {
    readonly page: Page
    readonly centralSearchField: Locator
    readonly issuesCheckbox: Locator
    readonly messagesCheckbox: Locator
    readonly commitBtn: Locator
    readonly searchResults: Locator

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.centralSearchField = page.locator('#search-input')
        this.issuesCheckbox = page.locator('#issues')
        this.messagesCheckbox = page.locator('#messages')   
        this.commitBtn = page.locator('[name="commit"]') 
        this.searchResults = page.locator('#search-results-counts')
    }
    
    async usingFilters(){
        await this.issuesCheckbox.click();
        await this.messagesCheckbox.click()
    }
}