import { expect, test } from '@playwright/test';
import { PasswordRecoveryPage } from '../pages/passwordRecovery.page';
import  * as testData from '../src/utils/const'

test ('A5 - Check the ability to recover password', async ({ page }) => {

    const passRecoveryPage = new PasswordRecoveryPage (page)
    await passRecoveryPage.goToMain();
    await passRecoveryPage.goToLoginPage();
    await passRecoveryPage.goToPassRecoveryPage();
    await passRecoveryPage.fillEmail(testData.email);
    await passRecoveryPage.submitPassRecovery();
    await expect(passRecoveryPage.message).toContainText("An email with instructions to choose a new password has been sent to you")
})