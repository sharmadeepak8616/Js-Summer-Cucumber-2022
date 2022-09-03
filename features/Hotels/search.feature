@hotelsSearch @hotels
Feature: Search

    @search-1 @sanity
    Scenario: Verify user entered data is correctly displayed on Search page
        Given I am on hotels landing page
        When I enter "new" in going to
        And I select "MANHATTAN" from auto-suggestion
        And I select "December 25 2022" as check-in date
        And I select "January 5 2022" as check-out date
        And I click on search button on Homepage
        Then I verify going to location contains "MANHATTAN"
        And I verify "December 25 2022" as check-in date
        And I verify "January 5 2022" as check-out date
        And I verify "MANHATTAN" filter is added

    @search-2
    Scenario: Verify user can search hotel with tomorrow as check-in date
        Given I am on hotels landing page
        When I enter "new" in going to
        And I select "MANHATTAN" from auto-suggestion
        And I select "Tomorrow" as check-in date
        And I select "5" days from check-in as check-out date
        And I click on search button on Homepage
        Then I verify going to location contains "MANHATTAN"
        And I verify "Tomorrow" as check-in date
        And I verify "5" days from check-in as check-out date
        And I verify "MANHATTAN" is added