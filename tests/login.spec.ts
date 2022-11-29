import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import  * as globalConst from '../const'

test ('Check the sign in of an existing user', async ({ page }) => {
    const logpage = new LoginPage(page);

    await logpage.goto();
    await logpage.loginBtn.click()
    await logpage.inputUsername.fill(globalConst.username);
    await logpage.inputPassword.fill(globalConst.password);
    await logpage.submitBtn.click()
    await expect(logpage.content).toContainText('Вошли как')
})