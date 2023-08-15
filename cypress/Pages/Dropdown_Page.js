
export class DropdownPage {
    static visit(){
        return cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    }
    static getDivByTitle(title) {
        return cy.xpath(`//div[@class='thumbnail']/*[contains(text(), '${title}')]`);
    }

    static getDropdownById(id) {
        return cy.xpath(`//div[@class='thumbnail']/*[contains(text(), 'Dropdown Menu(s)')]/..//select[@id='dropdowm-menu-${id}']`);
    }
    
    static verifyAllDropdownsOptions(arrayOfValues, dropdownID) {
        arrayOfValues.forEach((value) => {
            let el = value.toLowerCase().trim()
            this.getDropdownById(dropdownID).should('exist').select(el).invoke('val').should('eq', value);
        });
    }

    static get getCheckboxDiv() {
        return cy.xpath(`//div[@id='checkboxes']`)
    }

    static get get1option() {
        return cy.get("input[value='option-1']");
    }

    static get get2option() {
        return cy.get("input[value='option-2']");
    }

    static get get3option() {
        return cy.get("input[value='option-3']");
    }

    static get get4option() {
        return cy.get("input[value='option-4']");
    }

    static get getAllCheckboxes() {
        return cy.get("input[type='checkbox']");
    }

    static get getAllRadioButtons() {
        return cy.xpath(`//form[@id="radio-buttons"]/input[@type='radio']`);
    }

    static verifyAllFruitSelects(arrayOfValues, fruits) {
        arrayOfValues.forEach((value) => {
            DropdownPage.getAllFruitSelects(fruits).should('exist').select(value).invoke('val').should('eq', value)
        })
    }
    
    static get getAllSelectedAndDisabled() {
        return cy.xpath(`//form[@id='radio-buttons-selected-disabled']//input[@type='radio']`)
    }

    static get getAllFruitSelects() {
        return cy.xpath(`//select[@id="fruit-selects"]`);
    } 
}

export default DropdownPage