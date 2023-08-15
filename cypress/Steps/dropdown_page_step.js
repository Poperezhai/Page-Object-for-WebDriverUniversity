import DropdownPage from "../Pages/Dropdown_Page";
import { dropdown1, dropdown2, dropdown3, fruits } from "../Test_data/dropdown_data";

export class DropdownStep {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.url().should('contain', 'Dropdown-Checkboxes-RadioButtons');
    }

    verifyAllDivTitles() {
        DropdownPage.getDivByTitle('Dropdown Menu(s)').should('exist');
        DropdownPage.getDivByTitle('Checkboxe(s)').should('exist');
        DropdownPage.getDivByTitle('Radio Button(s)').should('exist');
        DropdownPage.getDivByTitle('Selected & Disabled').should('exist');
        DropdownPage.verifyAllDropdownsOptions(dropdown1, 1);
        DropdownPage.verifyAllDropdownsOptions(dropdown2, 2);
        DropdownPage.verifyAllDropdownsOptions(dropdown3, 3);
    }
    
    verifyAllDropdownsOptions() {        
        DropdownPage.verifyAllDropdownsOptions(dropdown1, 1);
        DropdownPage.verifyAllDropdownsOptions(dropdown2, 2);
        DropdownPage.verifyAllDropdownsOptions(dropdown3, 3);
    }

    verifyCheckboxes() {
        DropdownPage.getAllCheckboxes.each($el=>{
            let el = $el
            cy.wrap(el).check().should('be.checked')
        });
    }

    verifyRadioButtons() {
        DropdownPage.getAllRadioButtons.check('green').should('be.checked');
        cy.get('input[value="blue"]').should('not.be.checked');
        cy.get('input[value="yellow"]').should('not.be.checked');
        cy.get('input[value="orange"]').should('not.be.checked');
        cy.get('input[value="purple"]').should('not.be.checked');
        DropdownPage.getAllRadioButtons.check('blue').should('be.checked');
        cy.get('input[value="green"]').should('not.be.checked');
        cy.get('input[value="yellow"]').should('not.be.checked');
        cy.get('input[value="orange"]').should('not.be.checked');
        cy.get('input[value="purple"]').should('not.be.checked');
        DropdownPage.getAllRadioButtons.check('yellow').should('be.checked');
        cy.get('input[value="green"]').should('not.be.checked');
        cy.get('input[value="blue"]').should('not.be.checked');
        cy.get('input[value="orange"]').should('not.be.checked');
        cy.get('input[value="purple"]').should('not.be.checked');
        DropdownPage.getAllRadioButtons.check('orange').should('be.checked');
        cy.get('input[value="green"]').should('not.be.checked');
        cy.get('input[value="blue"]').should('not.be.checked');
        cy.get('input[value="yellow"]').should('not.be.checked');
        cy.get('input[value="purple"]').should('not.be.checked');
        DropdownPage.getAllRadioButtons.check('purple').should('be.checked');
        cy.get('input[value="blue"]').should('not.be.checked');
        cy.get('input[value="yellow"]').should('not.be.checked');
        cy.get('input[value="orange"]').should('not.be.checked');
    }    
   
    verifyAllSelectedAndDisabled() {
        DropdownPage.getAllSelectedAndDisabled.check('pumpkin').should('be.checked');
        cy.get('input[value="lettuce"]').should('not.be.checked');
        cy.get('input[value="cabbage"]').should('be.disabled');
        DropdownPage.getAllSelectedAndDisabled.check('lettuce').should('be.checked');
        cy.get('input[value="pumpkin"]').should('not.be.checked');
        cy.get('input[value="cabbage"]').should('be.disabled');
        DropdownPage.verifyAllFruitSelects;
        cy.xpath(`//select[@id="fruit-selects"]//option[@value="orange"]`).should('be.disabled');
    }

}

export const dropdownStep = new DropdownStep();