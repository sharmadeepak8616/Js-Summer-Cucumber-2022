const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Facebook/Homepage");
const Loginpage = require("../../Pages/Facebook/Loginpage");
const homepage = new Homepage();
const loginpage = new Loginpage();

// Glue code
/**
 * Glue code is a regular expression which helps to map Scenario-steps with functions
 */
Given(/^I am on (facebook|hotels|darksky) homepage$/, async function(urlName) {
    switch (urlName.toLowerCase()) {
        case 'facebook':
            await browser.url('/');
            break;
        case 'hotels':
            await browser.url('https://www.hotels.com/');
            break;
        case 'darksky':
            await browser.url('https://www.darksky.net/');
            break;    
        default:
            await browser.url('/');
            break;
    }
});

Then(/^I verify login (username|password|button) field is enabled$/, async function(fieldName) {
    switch (fieldName.toLowerCase()) {
        case 'username':
            expect(await homepage.isLoginFieldEnabled('username'), 'Login email field is NOT enabled').to.be.true;
            break;
         case 'password':
            expect(await homepage.isLoginFieldEnabled('password'), 'Login password field is NOT enabled').to.be.true;
            break;
        case 'button':
            expect(await homepage.isLoginFieldEnabled('button'), 'Login button is NOT enabled').to.be.true;
    } 
});

// Then(/^I verify login password field is enabled$/, async function() {
//     expect(await homepage.isLoginPwdFieldEnabled(), 'Login password field is NOT enabled').to.be.true;
// });

// Then(/^I verify login button field is enabled$/, async function() {
//     expect(await homepage.isLoginBtnEnabled(), 'Login button is NOT enabled').to.be.true;
// });

// When(/^I enter "(.+)" as username$/, async function(username) {
//     await homepage.enterLoginEmail(username);
// });

// When(/^I enter "(.+)" as password$/, async function(password) {
//     await homepage.enterLoginPassword(password);
// });

When(/^I enter "(.+)" as (username|password)$/, async function(value, fieldName) {
    switch(fieldName) {
        case 'username':
            await homepage.enterLoginEmail(value);
            break;
        case 'password':
            await homepage.enterLoginPassword(value);
            break;            
    }
});


When(/^I click (Create New Account|login) button$/, async function(buttonName) {
    switch (buttonName.toLowerCase()) {
        case 'login':
            await homepage.clickLoginButton();
            break;
        case 'create new account':
            await homepage.clickCreateNewAccount();
            break;
    }
});

Then(/^I verify error is displayed$/, async function() {
    expect(await loginpage.isLoginErrDisplayed(), 'Login error is NOT displayed').to.be.true;
});

Then(/^I verify (.+) links on the homepage$/, async function(count) {
    const links = await homepage.getAllLinks();
    expect(links.length, 'Links of Homepage is not as expected').to.equal(Number(count));
});

When(/^user selects Saving account$/, () => {
    // code selects Saving type
})


When(/^user selects Checking account$/, () => {
    // code selects Saving type
})

When(/^user selects (Saving|Checking) account$/, (accType) => {
    switch (accType) {
        case 'Saving':
            // code selects Saving type
            break;
        case 'Checking':
            // code selects Checking type
            break;
        default:
            break;
    }
})