import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main.page'
import { SearchPage } from '../pages/search.page'

test ('Check  the ability to use search filters', async ({ page }) => {
    const homepage = new MainPage(page);
    const searchpage = new SearchPage(page)
    
    await homepage.goto();
    await homepage.searchField.fill('Redmine');
    await homepage.searchField.press('Enter');
    
    expect(searchpage.searchField).toHaveValue('Redmine')
    
    await searchpage.usingFilters();

    await expect(searchpage.searchResults).toContainText('Issues')
    await expect(searchpage.searchResults).toContainText('Messages')
}
)