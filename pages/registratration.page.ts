import { Page, Locator, expect } from '@playwright/test';
import { MainPage } from './main.page';

export class RegistrationPage extends MainPage {

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
    super(page);
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
async fillUsername(username){
    await this.inputUsername.type(username);
  
}
async fillPassword(password){
    await this.inputPassword.fill(password);
    await expect(this.inputPassword).toHaveValue(password)
}
async fillPasswordConfirmation(password){
    await this.inputPasswordConfirmation.fill(password);
    await expect(this.inputPasswordConfirmation).toHaveValue(password)
}
async fillFirstName(firstName){
    await this.inputFirstName.fill(firstName);
    await expect(this.inputFirstName).toHaveValue(firstName)
}
async fillLasttName(lastName){
    await this.inputLastName.fill(lastName);
    await expect(this.inputLastName).toHaveValue(lastName)
}
async fillEmail(email){
    await this.inputEmail.fill(email);
    await expect(this.inputEmail).toHaveValue(email)
}
async changeLanguage(){
    await this.chooseLanguage.click()
    await this.chooseLanguage.selectOption('uk')
    await expect (this.chooseLanguage).toHaveValue('uk')
}
async submitRegistration(){
    await this.submitBtn.click()
    
}
}
