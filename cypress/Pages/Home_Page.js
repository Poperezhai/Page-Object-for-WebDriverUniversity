
export class HomePage {
static visitHomePage(){
    cy.visit('https://www.webdriveruniversity.com/Page-Object-Model/index.html');
}

static get checkLinkToTheMainPage() {
    return cy.get('#nav-title');
}

static get getFirstSlideOfCarousel() {
    return cy.get('li[data-slide-to="0"]');
}

static get getSecondSlideOfCarousel() {
    return cy.get('li[data-slide-to="1"]');
}

static get getThirdSlideOfCarousel() {
    return cy.get('li[data-slide-to="2"]');
}

static get getLeftCarouselControl() {
    return cy.xpath('//a[@data-slide="prev"]');
}

static get getRightCarouselControl() {
    return cy.xpath('//a[@data-slide="next"]');
}

static get getHomeButton() {
    return cy.get('a[href="index.html"]');
}

static get getContactUsButton() {
    return cy.get('a[href="../Contact-Us/contactus.html"]');
}

static get getOurProductsButton() {
    return cy.get('a[href="products.html"]');
}

static get getWhoAreWeBlock(){
    return cy.xpath('(//div[@class="row"])[2]/div[1]');
}

static get getWhoAreWeTitle() {
    return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(1) > div').contains('Who Are We?');
}

static get getFindOutMoreButton() {
    return cy.get('#button-find-out-more');//cy.xpath('//div[@class="modal-footer"]/button[(text()="Find Out More")]');
}

static get getModalWindow() {
    return cy.xpath('//div[@class="modal-dialog modal-md"]');
    /*return cy.get('#button-find-out-more');
    cy.get('button.btn.btn-secondary.center-block').should('have.text', 'Find Out More!');
    cy.get('div.modal-body>p').should('be.visible');
    cy.get('div.modal-body>p').contains('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
    cy.get('button.btn.btn-default').contains('Close').click();
    return cy.get('div.modal-body>p').should('not.be.visible'); */
}

static get getModalTitle() {
    return cy.xpath('//h4[@class="modal-title"]');
}

static get getModalText() {
    return cy.xpath('//div[@class="modal-body"]/p');
}

static get getModalCloseIcon() {
    return cy.xpath('//button[@class="close"]');
}

static get getFindOutMoreButtonInWindow() {
    return cy.xpath('//div[@class="modal-footer"]/button[(text()="Find Out More")]');
}

static get getModalCloseButton() {
    return cy.xpath('//div[@class="modal-footer"]/button[(text()="Close")]');
} 

static get getModalWindowCloseButton() {
    return cy.xpath('//div[@class="modal-footer"]/button[(text()="Close")]');
} 

static get getWhyChooseUsBlock() {
    return cy.xpath('(//div[@class="row"])[2]/div[3]'); 
}

static get getWhyChooseUsTitle() {
    return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(3) > div').contains('Why Choose Us?');
}

static get getGreateServiceBlock() {
    return cy.xpath('(//div[@class="row"])[2]/div[2]'); 
}

static get getGreateServiceTitle() {
    return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > div').contains('GREAT SERVICE!');
}

static get getGreatServiceStars() {
    return cy.xpath('(//div[@class="caption"])[2]/div[@class="div-star"]').children();
}

static get getExcellentCustomerServiceBlock() {
    return cy.xpath('(//div[@class="row"])[2]/div[4]');
} 

static get getExcellentCustomerServiceTitle() {
    return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(4) > div').contains('Excellent Customer Service!');
}

static get getExcellentCustomerServiceStars() {
    return cy.xpath('(//div[@class="caption"])[4]/div[@class="div-star"]').children();
} 

}

export default HomePage