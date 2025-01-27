import {test, expect} from "@playwright/test";
import HomePage from "../page_objects/homePage.js";
import {
    BASE_URL,
    WHATS_NEW_PAGE_END_POINT
} from "../helpers/testData.js";

test.describe('homePage.spec', () => {
    // test.beforeEach(async ({page}) => {
    //     const homePage = new HomePage(page);
    //     await homePage.open();
    // })

    test('Some title', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.open();
        
        const whatsNewPage = await homePage.clickWhatsNewLink();
        await expect(page).toHaveURL(BASE_URL + WHATS_NEW_PAGE_END_POINT);
        await expect(whatsNewPage.locators.getPageHeader()).toHaveText('What\'s New')
    })
})