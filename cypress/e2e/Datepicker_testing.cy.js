import { DatepickerStep, datepickerStep } from "../Steps/datepicker_step";
import { GeneralStep, generalStep } from "../Steps/general_step";
import dayjs from "dayjs";

describe('Datepicker', () =>  {
    beforeEach(() => {
        datepickerStep.openDatepickerPage();
      })
    
    it('Verify header of the web page and link to the Main page', () => {
        generalStep.verifyLinkToTheMainPage();
        generalStep.verifyThatHeaderIsShown();
    })

    it('Verify Datepicker page elements', () => {
        datepickerStep.verifyDatepickerPageTitle();
        datepickerStep.verifyCalendarIcon();
        datepickerStep.verifySelectDatePanel();
        datepickerStep.verifyDatepickerDropdown();
    })

    it('Check current date selecting', () => {
        datepickerStep.checkCurrentDate();
    })

    it('Check next day selecting', () => {
        datepickerStep.selectNextDayDate();
    })

    it('Check next month date selecting', () => {
        datepickerStep.selectNextMonthDate();
    })

    it('Check next year date selecting', () => {
        datepickerStep.selectNextYearDate();
    })

    it('Check random date selecting', () => {
        datepickerStep.selectRandomDate();
    })
});