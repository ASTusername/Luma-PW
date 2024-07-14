class WatchesPage {
    constructor(page) {
        this.page = page
    }
    
    locators = {
        getPageHeader: () => this.page.locator('.base'),
        getAmount: () => this.page.locator('.toolbar-number'),
        getProductsList: () => this.page.locator('ol[class=products]'),
        getProductLink: () => this.page.locator('ol[class=products]').filter({hasText: 'Summit Watch'})
    }
    
    async clickProductLink() {
        await this.locators.getProductLink().click();

        return new WhatsNewPage(this.page);
    }
}

export default WatchesPage;