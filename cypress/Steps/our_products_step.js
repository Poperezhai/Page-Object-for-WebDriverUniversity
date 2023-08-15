import { OurProducts } from "../Pages/Our_Products";

export class OurProductsStep {
    visitOurProducts() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
        cy.url().should('contain', 'products');
    }

    /* verifyLinkToTheMainPage() {
        OurProducts.checkLinkToTheMainPage.click();
        cy.url().should('equal', 'http://www.webdriveruniversity.com/index.html');
    } */

    verifySiteNavigationsButtons() {
        OurProducts.getHomeButton.click().url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/index.html').go('back');
        OurProducts.getContactUsButton.click().url().should('equal', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html').go('back');
        OurProducts.getOurProductsButton.click().url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/products.html');
    }

    verifyProductsDivs() {
        OurProducts.getSpecialOfferseDiv.should('have.text', 'Special Offers');
        OurProducts.getSpecialOffersImg.should('exist');
        OurProducts.getCamerasDiv.should('have.text', 'Cameras');
        OurProducts.getCamerasImg.should('exist');
        OurProducts.getNewLaptopsDiv.should('have.text', 'New Laptops');
        OurProducts.getNewLaptopsImg.should('exist');
        OurProducts.getUsedLaptopsDiv.should('have.text', 'Used Laptops');
        OurProducts.getUsedLaptopsImg.should('exist');
        OurProducts.getGameConsolesDiv.should('have.text', 'Game Consoles');
        OurProducts.getGameConsolesImg.should('exist');
        OurProducts.getComponentsDiv.should('have.text', 'Components');
        OurProducts.getComponentsImg.should('exist');
        OurProducts.getDesktopSystemsDiv.should('have.text', 'Desktop Systems');
        OurProducts.getDesctopSystemImg.should('exist');
        OurProducts.getAudioDiv.should('have.text', 'Audio');
        OurProducts.getAudioImg.should('exist');
    }

    verifyModalWindow() {
        OurProducts.getModalWindow.should('exist');
        OurProducts.getModalTitle.should('exist');
        OurProducts.getModalText.should('exist');
        OurProducts.getAllProducts.each($el => {
            const allProductsButtons = [];
            for (let i = 0; i < OurProducts.numberOfDivs.length; i++) {
              allProductsButtons.push(() => {
                console.log(i)
              })
            }
            for (const el of allProductsButtons) {
                el();
            }
            OurProducts.getAllProducts.eq(allProductsButtons).click();
            OurProducts.getModalWindow.should('be.visible');
            OurProducts.getModalButtons.should('contain', 'Proceed').and('contain', 'Close');
            OurProducts.getModalButtons.contains('Proceed').click();
            OurProducts.getModalWindow.should('not.be.visible');
            OurProducts.getAllProducts.eq(allProductsButtons).click();
            OurProducts.getModalButtons.contains('Close').click();
            OurProducts.getModalWindow.should('not.be.visible');
            OurProducts.getAllProducts.eq(allProductsButtons).click();
            OurProducts.getModalCloseIcon.click();
            OurProducts.getModalWindow.should('not.be.visible')
        });
        /* OurProducts.getAllProducts.each($el => {
            const allProductsButtons = [];
            for (let i = 0; i < OurProducts.numberOfDivs.length; i++) {
                allProductsButtons.push(() => {
                    console.log(i)
                })
            }
            for (const el of allProductsButtons) {
                el();
            }
            function clickAllButtons(arr) {
                for (let i = 0; i < arr.length; ++i) {
                    OurProducts.getAllProducts.eq(arr[i]).click();
                    OurProducts.getModalWindow.should('be.visible');
                    OurProducts.getModalButtons.should('contain', 'Proceed').and('contain', 'Close');
                    OurProducts.getModalButtons.contains('Proceed').click();
                    OurProducts.getModalWindow.should('not.be.visible');
                    OurProducts.getAllProducts.eq(arr[i]).click();
                    OurProducts.getModalButtons.contains('Close').click();
                    OurProducts.getModalWindow.should('not.be.visible');
                    OurProducts.getAllProducts.eq(arr[i]).click();
                    OurProducts.getModalCloseIcon.click();
                    OurProducts.getModalWindow.should('not.be.visible');
                }
            }
            clickAllButtons(allProductsButtons);
        }); */
    }
}

export const ourProductsStep = new OurProductsStep();