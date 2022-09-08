@fbhomepage @regression @fb
Feature: Login

    Background:
        Given I am on facebook homepage

    @login-1 @sanity @smoke @trial
    Scenario: Verify login fields are enabled by default
        Then I verify login username field is enabled
        And I verify login password field is enabled
        And I verify login button field is enabled

# @login-2 @sanity
# Scenario Outline: Verify user get error for invalid credentials
#     When I enter "<username>" as username
#     And I enter "<password>" as password
#     Then I verify login button field is enabled
#     When I click login button
#     Then I verify error is displayed
#     Examples:
#         | username         | password   |
#         | #$%^&            | invalidPwd |
#         | deepak@gmail.com | abcd@1234  |

# # How to handle DDT (Data Driven Testing) in Cucumber (BDD - Behavior Driven Development)
# # Ans: Using Scenario-Outline with Examples

# Scenario: Verify user can add payment method
#     Given user is on Payment page
#     When user clicks add Payment method button
#     And user selects Saving account
#     And user enters account number as 123456789
#     And user enters routing number as 021000021
#     Then user is able to add payment method

# Scenario: Verify user can add payment method
#     Given user is on Payment page
#     When user clicks add Payment method button
#     And user selects Checking account
#     And user enters account number as 987654321
#     And user enters routing number as 021000022
#     Then user is able to add payment method

# Scenario Outline: Verify user can add payment method - <accountType>
#     Given user is on Payment page
#     When user clicks add Payment method button
#     And user selects <accountType> account
#     And user enters account number as <accountNumber>
#     And user enters routing number as <routingNumber>
#     Then user is able to add payment method
#     Examples:
#         | accountType | accountNumber | routingNumber |
#         | Saving      | 123456789     | 021000021     |
#         | Checking    | 987654321     | 021000022     |