const { Then, When } = require("@wdio/cucumber-framework");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const { expect } = require("chai");

const homepage = new Homepage();
const searchpage = new Searchpage();

When(/^I enter "(.+)" in going to$/, async function(destination) {
    await homepage.enterDestination(destination);
})

When(/^I select "(.+)" from auto-suggestion$/, async function (autoSuggestionDestination) {
    await homepage.selectDestinationFromAutoSuggestion(autoSuggestionDestination);
})

When(/^I click on search button on Homepage$/, async function () {
    await homepage.clickSearchButton();
})

Then(/^I verify going to location contains "(.+)"$/, async function (expDestination) {
    await searchpage.waitForSearchByPropertyName();
    expect(await searchpage.isDestinationContainsUserDestination(expDestination), 'User destination is not displayed').to.be.true;
})



