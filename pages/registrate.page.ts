import {  Locator, Page } from '@playwright/test';
import { MainPage } from './main.page';
import { generateUsername } from "unique-username-generator";



export class RegistratePage {

readonly page: Page;
readonly inputUsername: Locator
readonly inputPassword: Locator
readonly inputPasswordConfirmation: Locator
readonly inputFirstName: Locator
readonly inputLastName: Locator
readonly inputEmail: Locator
readonly chooseLanguage: Locator
readonly ukrLanguage: Locator 
readonly submitBtn: Locator
readonly flashNotice: Locator
readonly errorMessage: Locator


constructor(page: Page) {
    this.page = page;
    this.inputUsername = page.locator('#user_login');
    this.inputPassword = page.locator('#user_password');
    this.inputPasswordConfirmation = page.locator('#user_password_confirmation');
    this.inputFirstName = page.locator('#user_firstname');
    this.inputLastName = page.locator('#user_lastname');
    this.inputEmail = page.locator('#user_mail');
    this.chooseLanguage = page.locator('#user_language')
    this.ukrLanguage = page.locator('[value="uk"]')
    this.submitBtn = page.locator('[type="submit"]')
    this.flashNotice = page.locator('#flash_notice')
    this.errorMessage = page.locator('#errorExplanation')
    
    }
    
async gotoRegistrate(){

    const regpage = new MainPage (this.page)
    await regpage.gotoRegistr();
    }

async fillData(){
    
    var username = generateUsername();
    await this.inputUsername.fill(username);
    await this.inputPassword.fill('test1234');
    await this.inputPasswordConfirmation.fill('test1234');
    await this.inputFirstName.fill('Tommy');
    await this.inputLastName.fill('Mommy');
    var email = generateUsername('@gmail.com');
    await this.inputEmail.fill(email);
    await this.chooseLanguage.click()
    await this.chooseLanguage.selectOption('uk')
    await this.submitBtn.click()
    }

async fillDataWithoutEmail(){
    await this.inputUsername.fill('Terments');
    await this.inputPassword.fill('test1234');
    await this.inputPasswordConfirmation.fill('test1234');
    await this.inputFirstName.fill('Tommy');
    await this.inputLastName.fill('Mommy');
    await this.submitBtn.click()   
    }

}
