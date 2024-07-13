class WomenPage {
    constructor(page) {
        this.page = page
    }
    
    locators = {
        getPageHeader: () => this.page.locator('.base')
    }    
}

export default WomenPage;