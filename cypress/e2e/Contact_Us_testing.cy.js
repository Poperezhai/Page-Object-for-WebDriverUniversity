/// <reference types="Cypress" />

import { users } from "../Test_data/users-test-data";
import ContactUsPage from "../Pages/Contact_Us_Form";
import { ContactUsStep, contactUsStep } from "../Steps/contact_us_step";
import { GeneralStep, generalStep } from "../Steps/general_step";
import HomePage from "../Pages/Home_Page";

const contactUsPage = new ContactUsPage();
const homePage = new HomePage();
const userWithAllValidData = users[0];
const userWithEmptyEmail = users[1];
const userWithWrongEmail = users[2];
const userWithEmptyFirstName = users[3];
const userWithEmptyLastName = users[4];

describe('Contact Us form', () => {
  beforeEach(() => {
    contactUsStep.visit();
  })

it('Verify link to the Main page, website header and footer', () => {
    generalStep.verifyLinkToTheMainPage();
    generalStep.verifyThatHeaderIsShown();
    generalStep.verifyHeaderText();
    generalStep.verifyThatFooterIsShown();
    generalStep.verifyFooterText();
});

it('Open and Fill In Contact Us form - with test case name $(userWithAllValidData)', () => {
      contactUsStep.fillAndVerifyContactUsForm(userWithAllValidData);
      contactUsStep.submitContactUsForm();
      contactUsStep.verifySuccessMessageIsDisplayed();
      contactUsStep.verifyRedirectToContactUsPage();
    })

    it('Open and Fill In Contact Us form - with test case name $(userWithEmptyEmail)', () => {
      contactUsStep.fillAndVerifyContactUsForm(userWithEmptyEmail);      
      contactUsStep.submitContactUsForm();
      contactUsStep.verifyInvalidEmailError();      
    })

    it('Open and Fill In Contact Us form - with test case name $(userWithWrongEmail)', () => {
      contactUsStep.fillAndVerifyContactUsForm(userWithWrongEmail);      
      contactUsStep.submitContactUsForm();
      contactUsStep.verifyInvalidEmailError();      
    })

    it('Open and Fill In Contact Us form - with test case name $(userWithEmptyFirstName)', () => {
      contactUsStep.fillAndVerifyContactUsForm(userWithEmptyFirstName);      
      contactUsStep.submitContactUsForm();
      contactUsStep.verifyAllFieldsAreRequired();      
    })

    it('Open and Fill In Contact Us form - with test case name $(userWithEmptyLastName)', () => {
      contactUsStep.fillAndVerifyContactUsForm(userWithEmptyLastName);      
      contactUsStep.submitContactUsForm();
      contactUsStep.verifyAllFieldsAreRequired();      
    })
  
  })
  


