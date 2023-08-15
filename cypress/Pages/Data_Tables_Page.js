
export class DataTablesPage {
    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    }

    static get getTable01Rows() {
        return cy.get('#t01>tbody>tr')
    }

    static get getTable01Columns() {
        return cy.get('#t01>tbody>tr:eq(0)>th')
    }

    static get getTable02Rows() {
        return cy.get('#t02>tbody>tr')
    }

    static get getTable02Columns() {
        return cy.get('#t02>tbody>tr:eq(0)>th')
    }

    static get getFirstname() {
        return cy.xpath(`//input[@name='firstname']`);
    }

    static get getLastname() {
        return cy.xpath(`//input[@name='lastname']`);
    }

    static get getTextInput() {
        return cy.xpath(`//textarea[@rows='10']`);
    }

    static get getBreadcrumbTitle() {
        return cy.xpath(`//h2[contains(text(),'Breadcrumb')]`)
    }

    static get getBreadcrumb() {
        return cy.xpath(`//ol[@class='breadcrumb traversal-breadcrumb']`);
    }

    static get getBadgesTitle() {
        return cy.xpath(`//h2[contains(text(),'Badges')]`);
    }

    static get getListGroup() {
        return cy.xpath(`//ul[@class='list-group']`);
    }

    static get getPaginationTitle() {
        return cy.xpath(`//h2[contains(text(),'Pagination')]`);
    }

    static get getPaginationButtons() {
        return cy.xpath(`//ul[@class='pagination traversal-pagination']//li//a`);
    }

    static get getLightTraversalTableTitle() {
        return cy.xpath(`//h2[contains(text(),'Table')]`);
    }

    static get getLightTraversalTableHeader() {
        return cy.xpath(`//tr[@class='bg-primary']//th`)
    }
    
    static get getLightTraversalTableRows() {
        return cy.xpath(`//table[@class='table table-light traversal-table']//tbody//tr`)
    }

    static get getLightTraversalTableColumns() {
        return cy.xpath(`//table[@class='table table-light traversal-table']//tbody//tr`)
    }

    static get getButtonsAndStatesTitle() {
        return cy.xpath(`//h2[contains(text(),'Buttons & States')]`);
    }

    static get getTraversalButtons() {
        return cy.xpath(`//div[@class='traversal-buttons']`);
    }

    static get getTraversalButtonStates() {
        return cy.xpath(`//div[@class='traversal-button-states']`);
    }

    static get getTraversalButtonOtherStates() {
        return cy.xpath(`//div[@data-toggle='buttons']`);
    }

    static get getRandomTextTitle() {
        return cy.xpath(`//h2[contains(text(),'Random Text')]`);
    }

    static get getRandomTextBody() {
        return cy.xpath(`//div[@class='traversal-marked-text']//p`);
    }

    static get getMarkedText() {
        return cy.xpath(`//mark[@class='traversal-mark']`);
    }

    static get getPblockText() {
        return cy.xpath(`//blockquote//p`);
    }

    static get getFooterText() {
        return cy.xpath(`//blockquote//footer`);
    }

    static get getFooterCitedText() {
        return cy.xpath(`//cite[@class='traversal-cite']`);
    }

    static get getListsTitle() {
        return cy.xpath(`//h2[contains(text(),'Lists')]`);
    }

    static get getListOfDrinks() {
        return cy.xpath(`//ul[@class='traversal-drinks-list']//li`);
    }

    static get getFoodList() {
        return cy.xpath(`//ul[@class='traversal-food-list']`);
    }
    
    static get getVegetablesList() {
        return cy.xpath(`//ul[@class='traversal-food-list']//li`);
    }

    static get getTypesOfJobs() {
        return cy.xpath(`//ul[@class='traversal-job-list']`);
    }

}

export default DataTablesPage