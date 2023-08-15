/// <reference types="Cypress" />

import { HiddenElementsStep, hiddenElementsStep } from "../Steps/hidden_elements_step";

describe('Hidden elements', () => {

    it('Click on the Not Displayed button', () => {
        hiddenElementsStep.visit();
        cy.once('uncaught:exception', () => false);
        hiddenElementsStep.clickNotDisplayedButton();
        //hiddenElementsStep.clickNotDisplayButtonByHTML();
    })

    it('Click on the Visibility button', () => {
        hiddenElementsStep.visit();
        cy.once('uncaught:exception', () => false);
        hiddenElementsStep.clickVisibilityButton();
    })

    it('Click on the Zero Opacity button', () => {
        hiddenElementsStep.visit();
        cy.once('uncaught:exception', () => false);
        hiddenElementsStep.clickZeroOpacityButton();
    })

}) 