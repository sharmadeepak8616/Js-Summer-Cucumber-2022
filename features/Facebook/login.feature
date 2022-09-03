@fbhomepage @regression @fb
Feature: Login

    Background:
        Given I am on facebook homepage

    @login-1 @sanity @smoke @trial
    Scenario: Verify login fields are enabled by default
        # Given I am on facebook homepage
        Then I verify login username field is enabled
        And I verify login password field is enabled
        And I verify login button field is enabled

    @login-2 @sanity
    Scenario Outline: Verify user get error for invalid credentials
        # Given I am on facebook homepage
        When I enter "<username>" as username
        And I enter "<password>" as password
        And I click login button
        Then I verify error is displayed
        Examples:
            | username         | password   |
            | #$%^&            | invalidPwd |
            | deepak@gmail.com | abcd@1234  |

# How to handle DDT (Data Driven Testing) in Cucumber (BDD - Behavior Driven Development)
# Ans: Using Scenario-Outline with Examples