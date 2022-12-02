import { expect, test } from '@playwright/test';
import { RegistrationPage } from '../pages/registratration.page';
import  * as testData from '../src/utils/const'

let registPage

test.beforeEach(async ({ page })  => {
    
    registPage = new RegistrationPage(page);
    await registPage.goToMain();
    await registPage.goToRegistrationPage();
    await registPage.fillUsername(testData.genUsername);
    await registPage.fillPassword(testData.password);   
    await registPage.fillPasswordConfirmation(testData.password);
    await registPage.fillFirstName(testData.firstName);
    await registPage.fillLasttName(testData.lastName);
  });

test ('A1 - Check the registration of a new user with valid data', async ({ page }) => {
   
    await registPage.fillEmail(testData.genEmail);
    await registPage.changeLanguage();
    await registPage.submitRegistration()
    await expect(registPage.flashNotice).toContainText("Account was successfully created")
})

test('A2 - Checking that it is not possible to register a new user without entering an email', async ({ page }) => {

    await registPage.fillEmail('')
    await registPage.submitRegistration();
    await expect(registPage.errorMessage).toContainText("Email can't be blank")
})