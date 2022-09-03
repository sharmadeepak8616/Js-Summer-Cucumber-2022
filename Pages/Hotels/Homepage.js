const MyMomentFunctions = require("../../Utils/MyMomentFunctions");
const Commands = require("../Commands");

class Homepage {

    goingToLocator = "//button[@aria-label='Going to']";
    toTypeInGoingToLocator = '#destination_form_field';

    destinationAutoSuggestionLocator = "//div[@class='truncate']//strong";

    calendarButtonLocator = '#date_form_field-btn';

    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';
    monthDatesLocatorEnds_DisableDated = '"]/following-sibling::table//button[@disabled]';

    monthHeadingLocatorStarts = 'h2='
    nextButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[2]";
    previousButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[1]";

    searchButton = '#submit_button';

    commands = new Commands;


    async clickSearchButton() {
        await this.commands.clickWebElement(this.searchButton);
    }

    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.toTypeInGoingToLocator, destination)
    }

    async selectDestinationFromAutoSuggestion(selectThis) {
        await this.commands.selectFromAutoSuggestions(this.destinationAutoSuggestionLocator, selectThis);
    }

    async clickOnCalendarButton() {
        await this.commands.clickWebElement(this.calendarButtonLocator);
    }

    async selectCheckInDate(monthName, year, checkInDate) {
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkInDate)
    }


    async selectCheckOutDate(monthName, year, checkOutDate) {
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkOutDate)
    }

    async getDisableDatesForCurrentMonth() {
        const currentMonthHeading = MyMomentFunctions.getCurrentMomentInFormat('MMMM YYYY');
        const monthName = currentMonthHeading.split(' ')[0];
        const year = currentMonthHeading.split(' ')[1];
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const isCurrentMonthSeen = await this.commands.isWebElementDisplayed(monthHeadingLocator);
        if (!isCurrentMonthSeen) {
            await this.commands.clickWebElement(this.previousButtonOnCalendarLocator);
        }
        const disabledDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds_DisableDated;
        return await this.commands.findWebElements(disabledDatesLocator);
    }


}
module.exports = Homepage;