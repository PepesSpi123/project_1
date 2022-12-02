import { expect, test } from '@playwright/test';
import { SearchPage } from '../pages/search.page'
import  * as testData from '../src/utils/const'

test ('A4 - Check  the ability to use search filters', async ({ page }) => {

    const searchPage = new SearchPage(page)
    await searchPage.goToMain();
    await searchPage.executeSearch(testData.text);
    await searchPage.checkingCentralField(testData.text);

    await searchPage.selectIssuesCheckbox();
    await searchPage.selectMessagesCheckbox();

    await searchPage.submitSearch();

    await expect(searchPage.searchResults).toContainText('Issues')
    await expect(searchPage.searchResults).toContainText('Messages')
}
)