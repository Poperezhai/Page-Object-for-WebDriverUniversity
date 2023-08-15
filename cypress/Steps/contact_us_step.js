import ContactUsPage from "../Pages/Contact_Us_Form";
import HomePage from "../Pages/Home_Page";

export class ContactUsStep {
    visit(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.url().should('include', 'contactus');
    }

    fillAndVerifyContactUsForm(user){
        if(user.first_name){
          ContactUsPage.getFirstname.type(user.first_name).should('have.value', user.first_name);
        }
        if(user.last_name){
          ContactUsPage.getLastname.type(user.last_name).should('have.value', user.last_name);
        }  
        if(user.email){
          ContactUsPage.getEmail.type(user.email).should('have.value', user.email);
        }  
        if(user.comment){
          ContactUsPage.getComment.type(user.comment).should('have.value', user.comment);
      }               
      }

      submitContactUsForm() {
        ContactUsPage.getSubmitButton.click();
      }

      verifySuccessMessageIsDisplayed(){
        ContactUsPage.getSuccessSubmitMessage.should('exist');
        ContactUsPage.getAllFieldsAreRequiredError.should('not.exist');
        ContactUsPage.getInvalidEmailError.should('not.exist');
      }

      verifyInvalidEmailError(){
        ContactUsPage.getInvalidEmailError.should('exist');
      }

      verifyAllFieldsAreRequired(){
        ContactUsPage.getAllFieldsAreRequiredError.should('exist');
      }

      verifyRedirectToContactUsPage() {        
        HomePage.visitHomePage();
        HomePage.getContactUsButton.click();//.url().should('equal', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.url().should('include', 'contactus');
      }
         
}

export const contactUsStep = new ContactUsStep()