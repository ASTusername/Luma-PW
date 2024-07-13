import {test as base} from '@playwright/test';
import HomePage from '../page_object/homePage';

export const test = base.extend({
    createNewAccount: [
        async ({ page }, use) => {
            const homePage = new HomePage(page);
            await homePage.open();

            await use("");
        },
        { scope: "test" },
    ]
}
);