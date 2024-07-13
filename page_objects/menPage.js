class MenPage {
    constructor(page) {
        this.page = page
    }
    
    locators = {
        getPageHeader: () => this.page.locator('.base')
    }    
}

export default MenPage;