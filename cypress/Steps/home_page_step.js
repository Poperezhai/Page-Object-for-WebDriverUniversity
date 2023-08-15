import HomePage from "../Pages/Home_Page";

export class HomePageStep {
    visitHomePage(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');
        cy.url().should('contain', 'Page-Object-Model');
    }

    verifySlidesofCarousel(){
        HomePage.getFirstSlideOfCarousel.click().should('have.class', 'active');
        HomePage.getSecondSlideOfCarousel.click().should('have.class', 'active');
        HomePage.getThirdSlideOfCarousel.click().should('have.class', 'active');
    }

    verrifyCarouselControls(){
        HomePage.getLeftCarouselControl.click().should('be.visible');
        HomePage.getLeftCarouselControl.click().should('be.visible');
    }

    verifySiteNavigationsButtons(){
        HomePage.getHomeButton.click().url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/index.html');
        HomePage.getContactUsButton.click().url().should('equal', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html').go('back');
        HomePage.getOurProductsButton.click().url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/products.html');
    }

    verifyWhoAreWeBlock(){
        HomePage.getWhoAreWeBlock.should('not.be.empty');
    }
    
    verifyWhoAreWeTitle(){
        HomePage.getWhoAreWeTitle.should('have.text', 'Who Are We?');
    }

    verifyFindOutMoreButton(){
        HomePage.getFindOutMoreButton.should('exist');        
    }

    verifyModalWindow(){
        HomePage.getFindOutMoreButton.click();
        HomePage.getModalWindow.should('be.visible');
        HomePage.getModalTitle.should('have.text', 'Welcome to webdriveruniversity.com');
        HomePage.getModalText.should('have.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
        HomePage.getModalCloseIcon.should('exist');
        HomePage.getFindOutMoreButtonInWindow.should('exist');
        HomePage.getModalCloseButton.should('exist'); 
    }

    verifyWhyChooseUsBlock(){
        HomePage.getWhyChooseUsBlock.should('not.be.empty');
        HomePage.getWhyChooseUsTitle.should('have.text', 'Why Choose Us?');
    }

    verifyGreateServiceBlock(){
        HomePage.getGreateServiceBlock.should('not.be.empty');
        HomePage.getGreateServiceTitle.should('have.text', 'GREAT SERVICE!');
        HomePage.getGreatServiceStars.should('exist');
    }

    verifyExcellentCustomerServiceBlock(){
        HomePage.getExcellentCustomerServiceBlock.should('not.be.empty');
        HomePage.getExcellentCustomerServiceTitle.should('have.text', 'Excellent Customer Service!');
        HomePage.getExcellentCustomerServiceStars.should('exist');
    }
}

export const homePageStep = new HomePageStep();