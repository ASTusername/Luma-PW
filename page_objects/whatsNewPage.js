class WhatsNewPage {
    constructor(page) {
        this.page = page
    }
    
    locators = {
        getPageHeader: () => this.page.locator('.base')
    }    
}

export default WhatsNewPage;