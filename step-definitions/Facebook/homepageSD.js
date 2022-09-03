const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Facebook/Homepage");
const InstagramPage = require("../../Pages/Facebook/InstagramPage");
const homepage = new Homepage();

// Glue code
/**
 * Glue code is a regular expression which helps to map Scenario-steps with functions
 */
Given(/^I click on (.+) link$/, async function(linkName) {
    await homepage.clickLinkOnFooter(linkName);
});

Given(/^I verify .+ opens in a new tab$/, async function() {
    const totalWindows = await homepage.getNumberOfWindows();
    expect(totalWindows, 'There is no new window').to.equal(2);
    await homepage.closeWindowExceptHome();
});