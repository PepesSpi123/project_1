import { expect, test } from '@playwright/test';
import { generateUsername } from "unique-username-generator";
import { RegistrationPage } from '../pages/registratration.page';
import { MainPage } from '../pages/main.page';

const username = generateUsername();
const email = generateUsername('@gmail.com');
const password = 'test1234'

test ('Check the registration of a new user with valid data', async ({ page }) => {
    const homepage = new MainPage(page);
    const registpage = new RegistrationPage(page)
    
    await homepage.goto();
    await homepage.registrationBtn.click()
    await registpage.inputUsername.fill(username);
    await registpage.inputPassword.fill('test1234');
    await registpage.inputPasswordConfirmation.fill('test1234');
    await registpage.inputFirstName.fill('Tommy');
    await registpage.inputLastName.fill('Mommy');
    expect (registpage.inputEmail).toBeEmpty
    await registpage.inputEmail.fill(email);
    await expect (registpage.inputEmail).toContainText('')
    await registpage.chooseLanguage.click()
    await registpage.chooseLanguage.selectOption('uk')
    await registpage.submitBtn.click()
    await expect(registpage.flashNotice).toContainText("Account was successfully created")
})

test('Checking that it is not possible to register a new user without entering an email', async ({ page }) => {
    const homepage = new MainPage(page);
    const registpage = new RegistrationPage (page);
    
    await homepage.goto();
    await homepage.registrationBtn.click();
    await registpage.inputUsername.fill(username);
    await registpage.inputPassword.fill(password);
    await registpage.inputPasswordConfirmation.fill(password);
    await registpage.inputFirstName.fill('Tommy');
    await registpage.inputLastName.fill('Mommy');

    expect(registpage.inputEmail).toBeEmpty

    await registpage.submitBtn.click()
    await expect(registpage.errorMessage).toContainText("Email can't be blank")
})