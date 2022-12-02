import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import  * as testData from '../src/utils/const'

test ('A3 - Check the sign in of an existing user', async ({ page }) => {
    const logPage = new LoginPage(page);
    await logPage.goToMain();
    await logPage.goToLoginPage();
 
    await logPage.fillUserData(testData.username, testData.password);

    await logPage.submitLogin()
    await expect(logPage.content).toContainText('Вошли как')
})