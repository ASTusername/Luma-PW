import {test, expect} from "@playwright/test";
import HomePage from "../page_objects/homePage.js";
import WatchesPage from "../page_objects/watchesPage.js";
import {
    BASE_URL,
    WATCHES_PAGE_END_POINT
} from "../helpers/testData.js";

test.describe('gearPage.spec', () => {
    test.beforeEach(async ({page}) => {
        const homePage = new HomePage(page);

        await homePage.open();
        await homePage.hoverGearLink();
        await homePage.clickGearWatchesLink();
    })

    test('Watches', async ({page}) => {
        // const watchesPage = new WatchesPage(page);

        await expect(page).toHaveURL(BASE_URL + WATCHES_PAGE_END_POINT);
        // await expect(watchesPage.locators.getPageHeader()).toHaveText('Watches')
    })

    test('Watches Amount', async ({page}) => {
        const watchesPage = new WatchesPage(page);
        
        await expect(watchesPage.locators.getProductsList()).toHaveCount(9)
    })
})