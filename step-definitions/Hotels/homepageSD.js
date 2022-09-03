const { Then, When } = require("@wdio/cucumber-framework");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const { expect } = require("chai");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();


Then(/^I click on Dates button on Homepage$/, async function () {
    await homepage.clickOnCalendarButton();
});

Then(/^I verify past dates on current month are displayed$/, async function () {
    const disabledDates = await homepage.getDisableDatesForCurrentMonth();
    console.log(`\n\nabc -> ${disabledDates.length}\n\n`);
    const currentDate = MyMomentFunctions.getCurrentMomentInFormat('D');
    expect(disabledDates.length, 'Number of disabled dates are not as expected').to.equal(currentDate-1);
});