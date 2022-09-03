@hotelshomepage @regression @hotels
Feature: Homepage Calendar

    @calendar-1 @sanity
    Scenario: Verify past dates of current month are displayed
        Given I am on hotels homepage
        When I click on Dates button on Homepage
        Then I verify past dates on current month are displayed