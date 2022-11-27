import { expect, test } from '@playwright/test';
import { RegistratePage } from '../pages/registrate.page'


test ('Registration with valid data', async ({ page }) => {
    const homepage = new RegistratePage(page);
    await homepage.gotoRegistrate();
    await homepage.fillData();
    await expect(homepage.flashNotice).toContainText("Account was successfully created")
})