import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page'

test ('Login', async ({ page }) => {
    const homepage = new LoginPage(page);
    await homepage.gotoLogin();
    await homepage.fillData()
    await expect(homepage.content).toContainText('Вошли как')
})