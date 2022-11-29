import { expect, test } from '@playwright/test';
import { SearchPage } from '../pages/search.page'
import  * as globalConst from '../const'

test ('Check  the ability to use search filters', async ({ page }) => {

    const searchpage = new SearchPage(page)
    
    await searchpage.goto();
    await searchpage.searchField.fill(globalConst.search);
    await searchpage.searchField.press('Enter');
    
    expect(searchpage.centralSearchField).toHaveValue(globalConst.search)
    
    await searchpage.usingFilters();

    await expect(searchpage.searchResults).toContainText('Issues')
    await expect(searchpage.searchResults).toContainText('Messages')
}
)