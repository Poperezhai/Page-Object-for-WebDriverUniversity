import DataTablesPage from "../Pages/Data_Tables_Page";
import { badges, breadcrumbButtons, footerCitedText, footerText, fruits, lightTraversalTable, lightTraversalTableData, listOfDrinks, markedText, pBlockText, randomText, table01, table02, traversalButtonOtherStates, traversalButtonStates, vegetables } from "../Test_data/data_tables_data";

export class DataTablesStep {
    visitDataTables() {
        DataTablesPage.visit();
        cy.url().should('contain', 'Data-Table');
    }

    verifyTable01Size() {
        DataTablesPage.getTable01Rows.should('have.length', 4);
        DataTablesPage.getTable01Columns.should('have.length', 3);
    }
    
    verifyTable02Size() {
        DataTablesPage.getTable02Rows.should('have.length', 4);
        DataTablesPage.getTable02Columns.should('have.length', 3);
    }

    checkTable01Data() {

        function rowCells(row) {
            return Cypress._.map(row.children, (cell) => cell.innerText)
        }

        DataTablesPage.getTable01Rows
            .then(rows => Cypress._.map(rows, rowCells))
            .each(($el, index) => {
                expect($el).to.deep.equal(table01[index].row)
            }
        )}

    checkTable02Data() {

        function rowCells(row) {
            return Cypress._.map(row.children, (cell) => cell.innerText)
        }

        DataTablesPage.getTable02Rows
            .then(rows => Cypress._.map(rows, rowCells))
            .each(($el, index) => {
                expect($el).to.deep.equal(table02[index].row)
            }
            )
    } 
    
    checkTextAreaFields(user) {
        if(user.first_name){
            DataTablesPage.getFirstname.type(user.first_name).should('have.value', user.first_name);
        }
        
        if(user.last_name){
            DataTablesPage.getLastname.type(user.last_name).should('have.value', user.last_name);
        }
        
        if(user.comment){
            DataTablesPage.getTextInput.clear({force:true}).type(user.comment).should('have.value', user.comment);
        }

    }

    verifyBreadcrumbTitle() {
        DataTablesPage.getBreadcrumbTitle.should('be.visible');
    }

    checkBreadcrumbButtons() {
        DataTablesPage.getBreadcrumb.children().then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', breadcrumbButtons);
    }

    checkActiveBreadcrumbButton() {
        DataTablesPage.getBreadcrumb.children('.active').should('contain', 'Contact Us');
    }

    verifyBadgesTitle() {
        DataTablesPage.getBadgesTitle.should('be.visible');
    }

    verifyListGroup() {
        DataTablesPage.getListGroup.children().then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText.trim().replace(/[\n\t]/g, ', '))
            )
        }).should('deep.equal', badges);
    }

    verifyPaginationTitle() {
        DataTablesPage.getPaginationTitle.should('be.visible');
    }

    checkPaginationLength() {
        DataTablesPage.getPaginationButtons.should('have.length', 7);
    }

    checkClickingPaginationButton() {
        DataTablesPage.getPaginationButtons.invoke('attr', 'href', 'http://www.webdriveruniversity.com/Data-Table/index.html#').each(($el) => {
            cy.wrap($el).click().url().should('contains', 'Data-Table');
         })
    }

    verifyLightTraversalTableTitle() {
        DataTablesPage.getLightTraversalTableTitle.should('be.visible');
    }
    
    checkLightTraversalTableSize() {
        DataTablesPage.getLightTraversalTableRows.should('have.length', 3);
        DataTablesPage.getLightTraversalTableColumns.should('have.length', 3)
    }    

    checkLightTraversalTableHeader() {
        DataTablesPage.getLightTraversalTableHeader.then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', lightTraversalTable);
    }
    
    checkLightTraversalTableData() {

        function rowCells(row) {
            return Cypress._.map(row.children, (cell) => cell.innerText)
        }

        DataTablesPage.getLightTraversalTableRows
            .then(rows => Cypress._.map(rows, rowCells))
            .each(($el, index) => {
                expect($el).to.deep.equal(lightTraversalTableData[index].row)
            }
            )
    }

    verifyButtonsAndStatesTitle() {
        DataTablesPage.getButtonsAndStatesTitle.should('be.visible');
    }

    verifyTraversalButtonsNumber() {
        DataTablesPage.getTraversalButtons.children().should('have.length', 5);
    }

    /* checkTraversalButtonsStates() {
        DataTablesPage.getTraversalButtons.children().then(($el) => {
            const buttons = $el.toArray()
            return Cypress._.sample(buttons)    
    }).then(($el) => {
        expect(Cypress.dom.isJquery($el), 'jQuery element').to.be.true
    }).click().should('be.focused');
    } */

    verifyTraversalButtonsNames() {
        DataTablesPage.getTraversalButtons.children().eq(0).should('have.text', 'Link');
        DataTablesPage.getTraversalButtons.children().eq(1).should('have.text', 'Button');
        DataTablesPage.getTraversalButtons.children().eq(2).should('have.value', 'Input');
        DataTablesPage.getTraversalButtons.children().eq(3).should('have.value', 'Submit');
        DataTablesPage.getTraversalButtons.children().eq(4).should('have.value', 'Reset');
    }

    checkTraversalLinkButton() {
        DataTablesPage.getTraversalButtons.children().eq(0).invoke('attr', 'href', 'http://www.webdriveruniversity.com/Data-Table/index.html#').click().url().should('include', 'Data-Table');
    }

    verifyTraversalButtonStatesNumber() {
        DataTablesPage.getTraversalButtonStates.children().should('have.length', 4);
    }
    
    verifyTraversalButtonStatesNames() {
        DataTablesPage.getTraversalButtonStates.children().then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', traversalButtonStates);
        
    }

    checkTraversalButtonDisabledState() {
        DataTablesPage.getTraversalButtonStates.children().each(($btn) => {
            if ($btn.text() === 'Warning') {
                expect($btn).to.have.class('disabled')
            }
            else {
                expect($btn).to.not.have.class('disabled')
            }
        })
    }

    verifyTraversalButtonOtherStatesNumber() {
        DataTablesPage.getTraversalButtonOtherStates.children().should('have.length', 4);
    }
    
    verifyTraversalButtonOtherStatesNames() {
        DataTablesPage.getTraversalButtonOtherStates.children().then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', traversalButtonOtherStates);
        
    }

    checkTraversalButtonActiveState() {
        DataTablesPage.getTraversalButtonOtherStates.children().each(($btn) => {
            if ($btn.text() === 'Button-1') {
                expect($btn).to.have.class('active')
            }
            else {
                expect($btn).to.not.have.class('active')
            }
        })
    }

    verifyRandomTextTitle() {
        DataTablesPage.getRandomTextTitle.should('be.visible');
    }

    verifyRandomTextBody() {
        DataTablesPage.getRandomTextBody.should('contain', randomText);
    }

    verifyMarkedText() {
        DataTablesPage.getMarkedText.should('contain', markedText);
    }

    verifyPblockText() {
        DataTablesPage.getPblockText.should('contain', pBlockText);
    }

    verifyFooterText() {
        DataTablesPage.getFooterText.should('contain', footerText);
    }

    verifyFooterCitedText() {
        DataTablesPage.getFooterCitedText.should('contain', footerCitedText);
    }

    verifyListsTitle() {
        DataTablesPage.getListsTitle.should('be.visible');
    }

    verifyListOfDrinks() {
        DataTablesPage.getListOfDrinks.then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', listOfDrinks);
    }    

    verifyFruitsList() {
        DataTablesPage.getFoodList.find('#fruits').should('have.text', 'Fruits');
        DataTablesPage.getFoodList.find('#veggie').prevUntil('#fruits').then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', fruits); 
    }
    
    verifyVegetablesList() {
        DataTablesPage.getFoodList.find('#veggie').should('have.text', 'Vegetables');
        DataTablesPage.getVegetablesList.last().should('have.text', 'Lentils');
        DataTablesPage.getVegetablesList.last().prevUntil('#veggie').then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', vegetables);
    }
    
    verifyTypesOfJobsList() {
        DataTablesPage.getTypesOfJobs.find('#types-of-jobs').should('have.text', 'Types of Jobs');
        DataTablesPage.getTypesOfJobs.find('.sales').should('have.text', 'Sales');
        DataTablesPage.getTypesOfJobs.find('.sales').prevUntil('#types-of-jobs').then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', ['Technology', 'Finance']);
    }
}

export const dataTablesStep = new DataTablesStep();