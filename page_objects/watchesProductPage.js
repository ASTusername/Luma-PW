class WatchesProductPage {
    constructor(page) {
        this.page = page
    }
    
    locators = {
        getPageHeader: () => this.page.locator('.base'),
        getBottonAddToCard: () => this.page.getByRole('bottom', {name: 'Add to Cart'})
    }
    
    async clickBottonAddToCard() {
        await this.locators.getBottonAddToCard().click();

        return new WatchesProductPage(this.page);
    }
}

export default WatchesProductPage;