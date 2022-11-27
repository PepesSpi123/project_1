import { test, expect } from '@playwright/test';
import { RegistratePage } from '../pages/registrate.page'


test('Registration without email', async ({ page }) => {
    const homepage = new RegistratePage(page);
    await homepage.gotoRegistrate();
    await homepage.fillDataWithoutEmail()
    await expect(homepage.errorMessage).toContainText("Email can't be blank")
})