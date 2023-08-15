import { DropdownPage } from "../Pages/Dropdown_Page";
import { dropdownStep } from "../Steps/dropdown_page_step";
import { dropdown1, dropdown2, dropdown3, fruits } from "../Test_data/dropdown_data";
import { GeneralStep, generalStep } from "../Steps/general_step";

describe ('Dropdown', () => {
    
    beforeEach(() => {
        dropdownStep.visit();
      })

    it('Visit Homepage and check link to the Main page, website header and footer', () => {
        generalStep.verifyLinkToTheMainPage();
        generalStep.verifyThatHeaderIsShown();
        generalStep.verifyHeaderText();
        generalStep.verifyThatFooterIsShown();
        generalStep.verifyFooterText();
    });

    it('Verify That All Sections Are Present', () =>{
        dropdownStep.verifyAllDivTitles();
    })
    
    it('Verify Selecting Of Dropdowns', () =>{
        dropdownStep.verifyAllDropdownsOptions();
    })

    it('Verify Checking Of Checkboxes', () =>{
        dropdownStep.verifyCheckboxes();
    })

    it('Verify Checking Of Radiobuttons', () =>{
        dropdownStep.verifyRadioButtons();
    })

    it('Verify That Active Options Could Be Checked And Disabled Options Are Disabled', () => {
        dropdownStep.verifyAllSelectedAndDisabled();               
    }) 
})