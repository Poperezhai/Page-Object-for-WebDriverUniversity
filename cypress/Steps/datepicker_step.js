/// <reference types = "Cypress"/>
import DatepickerPage from "../Pages/Datepicker_Page";
import dayjs from "dayjs";
import { getCurrentDate, getNextDayDate, getNextMonthDate, getNextYearDate, getRandomIndex, isWithinRange, yearToPickRange } from "../Test_data/datepicker_data";

export class DatepickerStep {
    openDatepickerPage() {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html');
        cy.url().should('contain', 'Datepicker')
    }

    verifyDatepickerPageTitle() {
        DatepickerPage.getDatepickerTitle.should('contain', 'Datepicker');
    }

    verifyCalendarIcon() {
        DatepickerPage.getCalendarIcon.should('exist');
    }

    verifySelectDatePanel() {
        DatepickerPage.getSelectDatePanel.should('be.visible');
    }

    verifyDatepickerDropdown() {
        DatepickerPage.getDatepickerDropdown.should('exist');
        DatepickerPage.getDatepickerDropdown.click().should('be.visible');
    }

    checkCurrentDate() {
        getCurrentDate(({ currentDate }) => {
            DatepickerPage.getFormControl.invoke('val').should('equal', currentDate);
        });
    }

    selectNextDayDate() {
        getNextDayDate(({ dayOfMonth }) => {
            DatepickerPage.getCalendarIcon.click();
            DatepickerPage.getDayByTitle(dayOfMonth).click();
        });
        getNextDayDate(({ nextDayDate }) => {
            DatepickerPage.getFormControl.invoke('val').should('equal', nextDayDate);
        });
        };    

    selectNextMonthDate() {
        getNextMonthDate(({ currentMonth, nextMonthDate, dayOfMonth, nextMonthName }) => {
            DatepickerPage.getCalendarIcon.click();
            DatepickerPage.getDatepickerSwitch(currentMonth).click();
            DatepickerPage.getMonthByTitle(nextMonthName).click();
            DatepickerPage.getDayByTitle(dayOfMonth).click()
            DatepickerPage.getFormControl.invoke('val').should('equal', nextMonthDate);
        });
    }

    selectNextYearDate() {
        getNextYearDate(({ currentMonth, dayOfMonth, nextMonthName }) => {
            DatepickerPage.getCalendarIcon.click();
            DatepickerPage.getDatepickerSwitch(currentMonth).click();
            DatepickerPage.getNextMonthsButton.click();
            DatepickerPage.getDatepickerMonth(nextMonthName).click();
            DatepickerPage.getDayByTitle(dayOfMonth).click();
        });
        getNextYearDate(({ nextYearDate }) => {
            DatepickerPage.getFormControl.invoke('val').should('eq', nextYearDate);
        });
    }

    selectRandomDate() {
        DatepickerPage.getCalendarIcon.click();
        DatepickerPage.getDatepickerYears.then(($yearElements) => {
            const randomYearIndex = getRandomIndex($yearElements.length)
            console.log(randomYearIndex);
            const randomYearText = $yearElements.eq(randomYearIndex).text();
            const randomYear = parseInt(randomYearText);
            console.log(randomYear);

            if (isWithinRange(randomYear, yearToPickRange)) {
                getCurrentDate(({ currentMonth, currentYear }) => {
                    DatepickerPage.getDatepickerSwitch(currentMonth).click();
                    DatepickerPage.getSwitchByYear(currentYear).click();
                });
                DatepickerPage.getDatepickerYears.contains(randomYearText).click({force: true});
            }

            const randomMonthIndex = getRandomIndex(11);
            DatepickerPage.getCalendarIcon.click();
            DatepickerPage.getDatepickerMonth.eq(randomMonthIndex).click({force: true});

            const daysInMonth = new Date(randomYear, randomMonthIndex + 1, 0).getDate();
            const randomDay = getRandomIndex(daysInMonth) + 1;
            DatepickerPage.getDaysOfCurrentMonth().contains(randomDay).click();

            DatepickerPage.getFormControl.invoke('val').then((selectedDate) => {
                const [selectedMonth, selectedDay, selectedYear] = selectedDate.split('-');
                expect(parseInt(selectedYear)).to.equal(randomYear);
                expect(parseInt(selectedMonth)).to.equal(randomMonthIndex + 1);
                expect(parseInt(selectedDay)).to.equal(randomDay);
            })
        })
    } 
}

export const datepickerStep = new DatepickerStep()