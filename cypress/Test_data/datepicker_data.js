import dayjs from "dayjs";

export function getCurrentDate() {
    const currentDate = dayjs().format('MM-DD-YYYY');
    const currentMonth = dayjs(currentDate).format('MMMM');
    const currentYear = dayjs(currentDate).format('YYYY');
    return { currentDate, currentMonth, currentYear };
}

export function getNextDayDate(currentDate) {
    const nextDayDate = dayjs(currentDate).add(1, 'day').format('MM-DD-YYYY');
    const dayOfMonth = dayjs(nextDayDate).format('D');
    return { nextDayDate, dayOfMonth };
}

export function getNextMonthDate(currentDate) {
    const currentMonth = dayjs(currentDate).format('MMMM');
    const nextDayDate = dayjs(currentDate).add(1, 'day');
    const dayOfMonth = nextDayDate.format('D');
    const nextMonthDate = nextDayDate.add(1, 'month').format('MM-DD-YYYY');
    const nextMonthName = dayjs(nextMonthDate).format('MMM');
    return { currentMonth, dayOfMonth, nextMonthDate, nextMonthName };
}

export function getNextYearDate(currentDate) {
    const currentMonth = dayjs(currentDate).format('MMMM');
    const nextDayDate = dayjs(currentDate).add(1, 'day');
    const dayOfMonth = nextDayDate.format('D');
    const nextMonthDate = nextDayDate.add(1, 'month').format('MM-DD-YYYY');
    const nextMonthName = dayjs(nextMonthDate).format('MMM');
    const nextYearDate = dayjs(nextMonthDate).add(1, 'year').format('MM-DD-YYYY');
    return { currentMonth, dayOfMonth, nextMonthDate, nextMonthName, nextYearDate };
}

export const yearToPickRange = {
    min: 1900,
    max: 2100,
};

export function isWithinRange(value, { min, max }) {
    return value >= min && value <= max;
}

export function getRandomIndex(length) {
    return Cypress._.random(0, length - 1);
}