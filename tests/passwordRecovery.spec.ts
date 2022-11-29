import { expect, test } from '@playwright/test';
import { PasswordRecoveryPage } from '../pages/passwordRecovery.page';
import  * as globalConst from '../const'

test ('Check the ability to recover password', async ({ page }) => {

    const lostpasspage = new PasswordRecoveryPage (page)
    
    await lostpasspage.goto();
    await lostpasspage.loginBtn.click()

    expect(lostpasspage.inputUsername).toBeVisible

    await lostpasspage.lostPassword.click()
    await lostpasspage.inputEmail.fill(globalConst.email)
    await lostpasspage.submitBtn.click()
    await expect(lostpasspage.message).toContainText("An email with instructions to choose a new password has been sent to you")
})