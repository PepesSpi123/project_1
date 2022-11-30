import { expect, test } from '@playwright/test';
import { SearchPage } from '../pages/search.page'
import  * as globalConst from '../const'

test ('A4 - Check  the ability to use search filters', async ({ page }) => {

    const searchPage = new SearchPage(page)
    
    await searchPage.goToSearchPage();
    await expect(searchPage.page).toHaveURL(/.*search/);
    expect(searchPage.centralSearchField).toHaveValue(globalConst.search)
    
    await searchPage.usingFilters();
    expect(searchPage.issuesCheckbox).toBeChecked();
    expect(searchPage.messagesCheckbox).toBeChecked();
    await searchPage.commitBtn.click()


    await expect(searchPage.searchResults).toContainText('Issues')
    await expect(searchPage.searchResults).toContainText('Messages')
}
)