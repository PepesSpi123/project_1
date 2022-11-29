import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { MainPage } from '../pages/main.page'

test ('Check the sign in of an existing user', async ({ page }) => {
    const homepage = new MainPage(page);
    const logpage = new LoginPage(page);

    await homepage.goto();
    await homepage.loginBtn.click()
    await logpage.inputUsername.fill('Paimon');
    await logpage.inputPassword.fill('123456');
    await logpage.submitBtn.click()
    await expect(logpage.content).toContainText('Вошли как')
})