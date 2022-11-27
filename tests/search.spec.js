import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main.page'
import { SearchPage } from '../pages/search.page'

test ('Search', async ({ page }) => {
    const homepage = new MainPage(page);
    await homepage.gotoSearch();
    const searchpage = new SearchPage(page)
    await searchpage.filtersUse();

    await expect(searchpage.searchResults).toBeVisible('Issues', 'Message')
}
)