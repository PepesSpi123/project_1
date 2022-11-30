import { Page, Locator } from '@playwright/test';
import { MainPage } from './main.page';
import  * as globalConst from '../const'

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
async fillUsername(){
    await this.inputUsername.type(globalConst.genUsername);
}
async fillPassword(){
    await this.inputPassword.fill(globalConst.password);
}
async fillPasswordConfirmation(){
    await this.inputPasswordConfirmation.fill(globalConst.password);
}
async fillFirstName(){
    await this.inputFirstName.fill(globalConst.firstName);
}
async fillLasttName(){
    await this.inputLastName.fill(globalConst.lastName);
}
async fillEmail(){
    await this.inputEmail.fill(globalConst.genEmail);
}
}
