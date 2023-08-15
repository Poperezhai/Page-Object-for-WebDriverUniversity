/// <reference types="Cypress" />
import { DataTablesStep, dataTablesStep } from "../Steps/data_tables_step";
import { GeneralStep, generalStep } from "../Steps/general_step";
import { users } from "../Test_data/users-test-data";

const userWithAllValidData = users[0];

describe('Data, Tables & Button States', () => {
    beforeEach(() => {
        dataTablesStep.visitDataTables();
      })

    it('Verify link to the Main page, website header and footer and Site Navigations Buttons', () => {
        generalStep.verifyLinkToTheMainPage();
        generalStep.verifyThatHeaderIsShown();       
        generalStep.verifyThatFooterIsShown();
        generalStep.verifyFooterText();
    });

    it('Verify Table01 and Table02', () => {
        dataTablesStep.verifyTable01Size();
        dataTablesStep.checkTable01Data();
        dataTablesStep.verifyTable02Size();
        dataTablesStep.checkTable02Data();
    });

    it('Verify Firstname, Lastname and Input Text Below fields', () => {
        dataTablesStep.checkTextAreaFields(userWithAllValidData);
    });

    it('Verify Breadcrumb block', () => {
        dataTablesStep.verifyBreadcrumbTitle();
        dataTablesStep.checkBreadcrumbButtons();
        dataTablesStep.checkActiveBreadcrumbButton();
    });

    it('Verify Badges block', () => {
        dataTablesStep.verifyBadgesTitle();
        dataTablesStep.verifyListGroup();
    });

    it('Verify Pagination', () => {
        dataTablesStep.verifyPaginationTitle();
        dataTablesStep.checkPaginationLength();
        dataTablesStep.checkClickingPaginationButton();
    });

    it('Verify Light Traversal Table', () => {
        dataTablesStep.verifyLightTraversalTableTitle();
        dataTablesStep.checkLightTraversalTableSize();
        dataTablesStep.checkLightTraversalTableHeader();
        dataTablesStep.checkLightTraversalTableData();
    });

    it('Verify Buttons & States block', () => {
        dataTablesStep.verifyButtonsAndStatesTitle();
        dataTablesStep.verifyTraversalButtonsNumber();        
        dataTablesStep.verifyTraversalButtonsNames();
        dataTablesStep.checkTraversalLinkButton();
        dataTablesStep.verifyTraversalButtonStatesNumber();
        dataTablesStep.verifyTraversalButtonStatesNames();
        dataTablesStep.checkTraversalButtonDisabledState();
        dataTablesStep.verifyTraversalButtonOtherStatesNumber();
        dataTablesStep.verifyTraversalButtonOtherStatesNames();
        dataTablesStep.checkTraversalButtonActiveState();
    });

    it('Verify Random Text block', () => {
        dataTablesStep.verifyRandomTextTitle();
        dataTablesStep.verifyRandomTextBody();
        dataTablesStep.verifyMarkedText();
        dataTablesStep.verifyPblockText();
        dataTablesStep.verifyFooterText();
        dataTablesStep.verifyFooterCitedText();
    });

    it('Verify Lists block', () => {
        dataTablesStep.verifyListsTitle();
        dataTablesStep.verifyListOfDrinks();
        dataTablesStep.verifyFruitsList();
        dataTablesStep.verifyVegetablesList();
        dataTablesStep.verifyTypesOfJobsList();
    });
})