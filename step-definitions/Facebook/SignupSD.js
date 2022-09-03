const { Given, Then, When } = require("@wdio/cucumber-framework");
const MyMomentFunctions = require("../../Utils/MyMomentFunctions");
const SignUpPage = require('../../Pages/Facebook/SignUpPage');
const { expect } = require("chai");
const signUpPage = new SignUpPage();

Then(/^I verify current date is selected in dropdown$/, async function () {
    const date = MyMomentFunctions.getCurrentMomentInFormat('D');
    const selectedDate = await signUpPage.getSelectedBirthDay();
    expect(selectedDate, 'Current date is not selected in dropdown').to.equal(date);

    const month = MyMomentFunctions.getCurrentMomentInFormat('MMM');
    const selectedMonth = await signUpPage.getSelectedBirthMonth();
    expect(selectedMonth, 'Current month is not selected in dropdown').to.equal(month);

    const year = MyMomentFunctions.getCurrentMomentInFormat('YYYY');
    const selectedYear = await signUpPage.getSelectedBirthYear();
    expect(selectedYear, 'Current year is not selected in dropdown').to.equal(year);
})