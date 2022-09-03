@fb @fbsignup @regression
Feature: Sign Up

    Background:
        Given I am on facebook homepage
        When I click Create New Account button

    @signup @dropdown @sanity @smoke @trial
    Scenario: Verify current date is selected on sign up form
        # Given I am on facebook homepage
        # When I click Create New Account button
        Then I verify current date is selected in dropdown

    @signup @gender @sanity @smoke
    Scenario: Verify no gender button is selected
        # Given I am on facebook homepage
        # When I click Create New Account button
        Then I verify female radio button is not selected
        And I verify male radio button is not selected
        And I verify custom radio button is not selected
        And I enter "abcd@1234" in confirm new password

    @signup @dropdown @sanity @smoke @trial
    Scenario: Verify user gets error if already registered
        # Given I am on facebook homepage
        # When I click Create New Account button
        And I enter "John" in firstname
        And I enter "Doe" in laststname
        And I enter "9879879870" in mobile number
        And I enter "abcd@1234" in new password
        And I enter "abcd@1234" in confirm new password
        And I select "Dec 12 1990" in date of birth
        And I select "female" in gender
        And I click submit button
        Then I verify user is already registered error is displayed