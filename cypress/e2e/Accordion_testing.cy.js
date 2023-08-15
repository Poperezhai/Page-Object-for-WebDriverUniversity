import { AccordionStep, accordionStep } from "../Steps/accordion_step";
import { GeneralStep, generalStep } from "../Steps/general_step";

describe ('Accordion', () => {

    beforeEach(() => {
        accordionStep.visit();
      })
    
    it('Verify header and footer of the web page and link to the Main page', () => {
        generalStep.verifyLinkToTheMainPage();
        generalStep.verifyThatHeaderIsShown();       
        generalStep.verifyThatFooterIsShown();
        generalStep.verifyFooterText();       
    })

    it('Verify Manual Testing block',()=>{
        accordionStep.getManualTestingTitle();
        accordionStep.checkManualTestingExpand();
        accordionStep.checkManualTestingAccordionDescription();
    })

    it('Verify Cucumber BDD block',()=>{
        accordionStep.getCucumberBddTitle();
        accordionStep.checkCucumberBddExpand();
        accordionStep.checkCucumberBddAccordionDescription();
    })

    it('Verify Automation Testing block',()=>{
        accordionStep.getAutomationTestingTitle();
        accordionStep.checkAutomationTestingExpand();
        accordionStep.checkAutomationTestingDescription();
    })

    it('Verify Keep Clicking block and Loading Panel',()=>{
        accordionStep.getAutomationTestingTitle();
        accordionStep.getLoadingPanel();
        accordionStep.checkLoadingPanelCompleteAndKeepClickingExpand();
        accordionStep.checkKeepClickingDescription();
    })
})