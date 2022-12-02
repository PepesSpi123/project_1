import {  Locator, Page, expect } from '@playwright/test';
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
    async checkingCentralField(text) {
        expect(this.centralSearchField).toHaveValue(text)
    }

    async selectIssuesCheckbox(){
        await this.issuesCheckbox.click();
        expect(this.issuesCheckbox).toBeChecked();
    }
    async selectMessagesCheckbox(){
        await this.messagesCheckbox.click();
        expect(this.messagesCheckbox).toBeChecked();
    }
    async submitSearch() {
        await this.commitBtn.click()
    }

}