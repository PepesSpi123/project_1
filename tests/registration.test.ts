import { expect, test } from '@playwright/test';
import { RegistrationPage } from '../pages/registratration.page';
import  * as globalConst from '../const'



test.beforeEach(async ({ page })  => {
    let registPage = new RegistrationPage(page)
    await registPage.goToRegistrationPage();
    await expect(registPage.page).toHaveURL(/.*register/);
    await registPage.fillUsername();
    await expect(registPage.inputUsername).toHaveValue(globalConst.genUsername)
    await registPage.fillPassword();   
    await expect(registPage.inputPassword).toHaveValue(globalConst.password)
    await registPage.fillPasswordConfirmation();
    await expect(registPage.inputPasswordConfirmation).toHaveValue(globalConst.password)
    await registPage.fillFirstName();
    await expect(registPage.inputFirstName).toHaveValue(globalConst.firstName)
    await registPage.fillLasttName();
    await expect(registPage.inputLastName).toHaveValue(globalConst.lastName)
  });

test ('A1 - Check the registration of a new user with valid data', async ({ page }) => {
    let registPage = new RegistrationPage(page)
    
    await registPage.fillEmail();
    await expect (registPage.inputEmail).toHaveValue(globalConst.genEmail)
    await registPage.chooseLanguage.click()
    await registPage.chooseLanguage.selectOption('uk')
    await expect (registPage.chooseLanguage).toHaveValue('uk')
    await registPage.submitBtn.click()
    await expect(registPage.flashNotice).toContainText("Account was successfully created")
})

test('A2 - Checking that it is not possible to register a new user without entering an email', async ({ page }) => {

    let registpage = new RegistrationPage (page);
    
    expect(registpage.inputEmail).toBeEmpty
    await registpage.submitBtn.click()
    await expect(registpage.errorMessage).toContainText("Email can't be blank")
})