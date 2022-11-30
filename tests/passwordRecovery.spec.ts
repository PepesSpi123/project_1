import { expect, test } from '@playwright/test';
import { PasswordRecoveryPage } from '../pages/passwordRecovery.page';
import  * as globalConst from '../const'

test('A5 - Check the ability to recover password', async ({ page }) => {

    const passRecoveryPage = new PasswordRecoveryPage (page)
    
    await passRecoveryPage.goToPassRecoveryPage();
    
    await expect(passRecoveryPage.page).toHaveURL(/.*lost_password/);

    await passRecoveryPage.fillEmail();

    await expect(passRecoveryPage.inputEmail).toHaveValue(globalConst.email)

    await passRecoveryPage.submitBtn.click()

    await expect(passRecoveryPage.message).toContainText("An email with instructions to choose a new password has been sent to you")
})