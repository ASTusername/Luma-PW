class GearPage {
    constructor(page) {
        this.page = page
    }
    
    locators = {
        getPageHeader: () => this.page.locator('.base')
    }    
}

export default GearPage;