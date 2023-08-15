
import { errors } from "../Test_data/Errors";

class ContactUsPage {
    
    static get getFirstname(){
        return cy.get('input[name="first_name"]')
    }
    
    static get getLastname(){
        return cy.get('input[name="last_name"]')
    }
    
    static get getEmail(){
        return cy.get('input[name="email"]')
    }
    
    static get getComment(){
        return cy.get('textarea[name="message"]')
    }
    
    static get getSubmitButton(){
        return cy.get('#form_buttons').contains('SUBMIT')
    }
    
    static get getResetButton(){
        return cy.get('#form_buttons').contains('RESET')
    }
    
    static get getContactUsHeader(){
        return cy.get('name="contactme"')
    }
    
    static get getSuccessSubmitMessage(){
        return cy.get('div#contact_reply > h1').contains('Thank You for your Message!');
    }    
    
    static get getInvalidEmailError(){
        return cy.contains(errors.invalidEmail);
    }
    
    static get getAllFieldsAreRequiredError(){
        return cy.contains(errors.allFieldsAreRequired);
    }    
}

export default ContactUsPage