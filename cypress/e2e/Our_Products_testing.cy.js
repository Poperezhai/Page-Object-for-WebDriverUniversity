/// <reference types="Cypress" />

import OurProducts from "../Pages/Our_Products";
import { OurProductsStep, ourProductsStep } from "../Steps/our_products_step";
import { GeneralStep, generalStep } from "../Steps/general_step";

describe('Our Products',  () => {
    beforeEach(() => {
        ourProductsStep.visitOurProducts();
      })

    it('Verify link to the Main page, website header and footer and Site Navigations Buttons', () => {
        generalStep.verifyLinkToTheMainPage();
        generalStep.verifyThatHeaderIsShown();       
        generalStep.verifyThatFooterIsShown();
        generalStep.verifyFooterText();
    });    
    
    it('Verify Site Navigations Buttons', () => {
        generalStep.verifyPageObjectNavPanel();
        ourProductsStep.verifySiteNavigationsButtons();
    });

    it('Verify Products Divs', () => {
        ourProductsStep.verifyProductsDivs();
    });

    it('Verify Modal Window', () => {
        ourProductsStep.verifyModalWindow();
        
    });
    
})