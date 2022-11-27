import { expect, test } from '@playwright/test';
import { PasswordRecoveryPage } from '../pages/passwordRecowery.page';
import { LoginPage } from '../pages/login.page'
import { MainPage } from '../pages/main.page'

test ('Password Recovery', async ({ page }) => {
    const homepage = new MainPage(page);
    await homepage.gotoLogin();
    const loginPage = new LoginPage(page)
    await loginPage.gotoPasswordRecovery()
    const lostPasspage = new PasswordRecoveryPage (page)
    await lostPasspage.passwordRecovery()
    await expect(lostPasspage.message).toContainText("An email with instructions to choose a new password has been sent to you")
})