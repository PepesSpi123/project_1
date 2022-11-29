import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main.page'
import { SearchPage } from '../pages/search.page'
import  * as globalConst from '../const'

test ('Check  the ability to use search filters', async ({ page }) => {
    const homepage = new MainPage(page);
    const searchpage = new SearchPage(page)
    
    await homepage.goto();
    await homepage.searchField.fill(globalConst.search);
    await homepage.searchField.press('Enter');
    
    expect(searchpage.searchField).toHaveValue(globalConst.search)
    
    await searchpage.usingFilters();

    await expect(searchpage.searchResults).toContainText('Issues')
    await expect(searchpage.searchResults).toContainText('Messages')
}
)