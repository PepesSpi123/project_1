import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import  * as globalConst from '../const'

test ('A3 - Check the sign in of an existing user', async ({ page }) => {
    const logPage = new LoginPage(page);

    await logPage.goToLoginPage();
    await expect(logPage.page).toHaveURL(/.*login/);
 
    await logPage.fillUserData();

    await expect(logPage.inputUsername).toHaveValue(globalConst.username)
    await expect(logPage.inputPassword).toHaveValue(globalConst.password)

    await logPage.submitBtn.click()
    await expect(logPage.content).toContainText('Вошли как')
})