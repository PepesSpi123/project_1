import { expect, test } from '@playwright/test';
import { PasswordRecoveryPage } from '../pages/passwordRecovery.page';
import { LoginPage } from '../pages/login.page';
import { MainPage } from '../pages/main.page';

test ('Check the ability to recover password', async ({ page }) => {
    const homepage = new MainPage(page);
    const loginpage = new LoginPage(page)
    const lostpasspage = new PasswordRecoveryPage (page)
    
    await homepage.goto();
    await homepage.loginBtn.click()

    expect(loginpage.inputUsername).toBeVisible

    await loginpage.lostPassword.click()
    await lostpasspage.recoverPassword()
    await expect(lostpasspage.message).toContainText("An email with instructions to choose a new password has been sent to you")
})