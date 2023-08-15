
export class GeneralPage {    

    static get openHomePage() {
        return cy.get('#nav-title');
    }
    
    static get getWebsiteHeader () {
        return cy.xpath(`//a[@id='nav-title']`)
    }

    static get getWebsiteTitle () {
        return cy.get('#main-header h1');
    }

    static get getPageObjectNavPanel () {
        return cy.xpath(`//ul[@class='nav navbar-nav']//li//a`);
    }

    static get getWebsiteFooter () {
        return cy.xpath(`//footer//div//div//p`);
    }    

}

export default GeneralPage