
import { currentDate } from "../Test_data/datepicker_data";

export class DatepickerPage {
    visit() {
        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
    }

    static get getDatepickerTitle() {
        return cy.xpath("//h1[. = 'Datepicker']");
    }

    static get getCalendarIcon() {
        return cy.xpath(`//i[@class='glyphicon glyphicon-calendar']`);
    }

    static get getSelectDatePanel() {
        return cy.xpath("//label[contains(text(), 'Select Date: ')]");
    }    

    static get getDatepickerDropdown() {
        return cy.get("#datepicker");
    }

    static get getFormControl() {
        return cy.xpath(`//input[@class='form-control']`);
    }

    /* static get getActiveDays() {
        return cy.xpath(`//tbody//tr//td[@class='day']`);
    } */

    static getDayByTitle(dayOfMonth) {
        return cy.xpath(`//tbody//tr//td[@class='day' and text()='${dayOfMonth}']`);
    }

    static getDatepickerSwitch(month) {
        return cy.xpath(`//thead//tr//th[@class='datepicker-switch' and contains(text(), '${month}')]`);
    }

    static getMonthByTitle(month) {
        return cy.xpath(`//tbody//tr//td//span[@class='month' and text()='${month}']`);
    }

    static get getNextMonthsButton() {
        return cy.xpath(`//div[@class='datepicker-months']//th[@class='next']`);
    }

    static get getDatepickerMonth() {
        return cy.xpath(`//tbody//tr//td//span[@class='month']`)
    }

    static get getDatepickerYears() {
        return cy.xpath(`//div[@class='datepicker-years']//td//span`);
    }

    static getSwitchByYear(year) {
        return cy.xpath(`//div[@class='datepicker-months']//th[@class='datepicker-switch' and text()='${year}']`)
    }

    static getDaysOfCurrentMonth() {
        return cy.xpath(`//td[contains(@class, "day") and not(contains(@class, "old")) and not(contains(@class, "new"))]`);
    }
    
}

export default DatepickerPage;