/// <reference types="Cypress" />

import HomePage from "../Pages/Home_Page";
import { HomePageStep, homePageStep } from "../Steps/home_page_step";
import { GeneralStep, generalStep } from "../Steps/general_step";

const homePage = new HomePage();

describe('Home Page', () => {
    beforeEach(() => {
        homePageStep.visitHomePage();
      })

    it('Visit Homepage and check link to the Main page, website header and footer', () => {
        generalStep.verifyLinkToTheMainPage();
        generalStep.verifyThatHeaderIsShown();
        generalStep.verifyThatFooterIsShown();
        generalStep.verifyFooterText();
    });
    
    it('Verify slides and scrolls on Carousel', () => {
        homePageStep.verifySlidesofCarousel();        
        homePageStep.verrifyCarouselControls();
    });
    
    it('Verify Site Navigations Buttons', () => {
        generalStep.verifyPageObjectNavPanel();
        homePageStep.verifySiteNavigationsButtons();
    });

    it('Check Who Are We? Block', () => {
        homePageStep.verifyWhoAreWeBlock();
        homePageStep.verifyWhoAreWeTitle();
        homePageStep.verifyFindOutMoreButton();
    });

    it('Verify Modal Window', () => {
        homePageStep.verifyModalWindow();
    });

    it('Check Why Choose Us? Block', () => {
        homePageStep.verifyWhyChooseUsBlock;
    });

    it('Check GREAT SERVICE! Block', () => {
        homePageStep.verifyGreateServiceBlock();
    });

    it('Check Excellent Customer Service! Block', () => {
       homePageStep.verifyExcellentCustomerServiceBlock();
    });
    
})