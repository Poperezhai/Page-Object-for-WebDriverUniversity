
export class OurProducts{
    static visitOurProducts() {
        cy.visit('https://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }

    /* static get checkLinkToTheMainPage() {
        return cy.get('#nav-title');
    } */
            
    static get getHomeButton() {
        return cy.get('a[href="index.html"]');
    }
    
    static get getContactUsButton() {
        return cy.get('a[href="../Contact-Us/contactus.html"]');
    }
    
    static get getOurProductsButton() {
        return cy.get('a[href="products.html"]');
    }

    static get getSpecialOfferseDiv() {
        return cy.get('div#container-special-offers>div>p');
    }

    static get getSpecialOffersImg() {
        return cy.xpath('//img[@id="amp-img"]')
    }

    static get getCamerasDiv() {
        return cy.get('div#container-product1>div>p');
    }

    static get getCamerasImg() {
        return cy.xpath('//img[@id="camera-img"]')
    }

    static get getNewLaptopsDiv() {
        return cy.get('div#container-product2>div>p');
    }

    static get getNewLaptopsImg() {
        return cy.xpath('//img[@id="laptop1"]')
    }

    static get getUsedLaptopsDiv() {
        return cy.get('div#container-product3>div>p');
    }

    static get getUsedLaptopsImg(){
        return cy.xpath('//img[@id="laptop2"]')
    }

    static get getGameConsolesDiv() {
        return cy.get('div#container-product4>div>p');
    }

    static get getGameConsolesImg() {
        return cy.xpath('//img[@id="nintendo"]')
    }

    static get getComponentsDiv() {
        return cy.get('div#container-product5>div>p');
    }

    static get getComponentsImg() {
        return cy.xpath('//img[@id="graphic-card"]')
    }

    static get getDesktopSystemsDiv() {
        return cy.get('div#container-product6>div>p').should('have.text', 'Desktop Systems');
    }

    static get getDesctopSystemImg() {
        return cy.xpath('//img[@id="computer"]')
    }

    static get getAudioDiv() {
        return cy.get('div#container-product7>div>p');
    }

    static get getAudioImg() {
        return cy.xpath('//img[@id="boombox"]')
    }

    static get getAllProducts() {
        return cy.xpath('(//div[@class="row"])[2]').children();
    }
    
    static get numberOfDivs() {
        return cy.get('div.row>div[data-target="#myModal"]');
    }

    static get getModalWindow() {
        return cy.xpath('//div[@class="modal-content"]');
    }

    static get getModalTitle () {
        return cy.xpath('//h4[@class="modal-title"]');
    }

    static get getModalText() {
        return cy.xpath('//div[@class="modal-body"]');
    }

    static get getModalButtons() {
        return cy.xpath('//button[@class="btn btn-default"]');
    }

    static get getModalCloseIcon() {
        return cy.xpath('//button[@class="close"]');
    } 

}

export default OurProducts