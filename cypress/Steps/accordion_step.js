/// <reference types = "Cypress"/>
import { AccordionPage } from "../Pages/Accordion_Page";
import { ManualTestingDescription, CucumberBDDDescription, AutomationTestingDescription, KeepClickingAccordionDescription } from "../Test_data/accordion_data";

export class AccordionStep {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Accordion/index.html').url().should('include', 'Accordion');
    }

    /* verifyLinkToTheMainPage(){
        AccordionPage.checkLinkToTheMainPage.click();
        cy.url().should('equal', 'http://www.webdriveruniversity.com/index.html').go('back');
    }

    getHeader() {
        AccordionPage.header.should('have.text', 'Click on One of the Accordian Items Below!');
    } */
    
    getManualTestingTitle() {
        AccordionPage.manualTestingAccordion.should('exist');
    }
    
    checkManualTestingExpand() {
        AccordionPage.manualTestingAccordion.should('have.text', 'Manual Testing').click().should('have.class', 'accordion active');
    }
    
    checkManualTestingAccordionDescription() {
        AccordionPage.manualTestingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(ManualTestingDescription);
        })
    }
    
    getCucumberBddTitle() {
        AccordionPage.cucumberBddAccordion.should('exist');
    }

    checkCucumberBddExpand() {
        AccordionPage.cucumberBddAccordion.should('have.text', 'Cucumber BDD').
            click().should('have.class', 'accordion active');
    }

    checkCucumberBddAccordionDescription() {
        AccordionPage.cucumberBddAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(CucumberBDDDescription);
        })
    }
    
    getAutomationTestingTitle() {
        AccordionPage.cucumberBddAccordion.should('exist');
    }
    
    checkAutomationTestingExpand() {
        AccordionPage.automationTestingAccordion.should('have.text', 'Automation Testing').
            click().should('have.class', 'accordion active');
    }
    
    checkAutomationTestingDescription() {
        AccordionPage.automationTestingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(AutomationTestingDescription);
        })
    }
    
    getKeepClickingTitle() {
        AccordionPage.keepClickingAccordion.should('exist');
    }

    checkKeepClickingDescription() {
        AccordionPage.keepClickingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(KeepClickingAccordionDescription);
        })
    }

    getLoadingPanel() {
        AccordionPage.loadingPanel.should('exist');
    }

    checkLoadingPanelCompleteAndKeepClickingExpand() {
        AccordionPage.loadingPanel.invoke('text').then((currentText) => {
            cy.waitUntil(() =>
            AccordionPage.loadingPanel.invoke('text').then((expectedText) => {
                    return currentText !== expectedText
                })
            ).then(() => {
                AccordionPage.keepClickingAccordion.click().should('have.class', 'active')
            })
        })
    }      
    
}

export const accordionStep = new AccordionStep(); 