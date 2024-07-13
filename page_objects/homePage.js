import WhatsNewPage from "./whatsNewPage.js";

class HomePage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getWhatsNewLink: () => this.page.locator('#ui-id-3'), //
        // getWhatsNewLink: () => this.page.getByRole('menuitem', {name:"What's New"}),
        getWomenLink: () => this.page.getByRole('menuitem', {name:"Women"}),
        getMenLink: () => this.page.getByRole('menuitem', {name:"Men"}),
        getGearLink: () => this.page.getByRole('menuitem', {name:"Gear"}),
        getTrainingLink: () => this.page.getByRole('menuitem', {name:"Training"}),
        getSaleLink: () => this.page.getByRole('menuitem', {name:"Sale"})
    }

    async open() {
        await this.page.goto("/");
    }

    async clickWhatsNewLink() {
        // await this.locators.getAboutLink().first().click();
        await this.locators.getWhatsNewLink().click();

        return new WhatsNewPage(this.page);
    }
}

export default HomePage;