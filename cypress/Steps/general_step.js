import GeneralPage from "../Pages/General_Page";

export class GeneralStep {
    verifyLinkToTheMainPage() {
        GeneralPage.openHomePage.click();
        cy.url().should('equal', 'http://www.webdriveruniversity.com/index.html').go('back');
    }

    verifyThatHeaderIsShown() {
        GeneralPage.getWebsiteHeader.should('be.visible');
    }

    verifyHeaderText(text) {
        GeneralPage.getWebsiteHeader.then($el => $el.text().trim()).should('contain', 'WebdriverUniversity.com');//('eq', text);
    }

    verifyThatFooterIsShown() {
        GeneralPage.getWebsiteFooter.should('be.visible');
    }

    verifyFooterText() {
        GeneralPage.getWebsiteFooter.then($el => $el.text().trim()).should('eq', 'Copyright © www.GianniBruno.com');
    }

    verifyTitleText(text) {
        GeneralPage.getWebsiteTitle.then($el => $el.text().trim()).should('eq', text);
    }

    verifyPageObjectNavPanel() {
        GeneralPage.getPageObjectNavPanel.then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', ['Home', 'Our Products', 'Contact Us']);
    }

}

export const generalStep = new GeneralStep();