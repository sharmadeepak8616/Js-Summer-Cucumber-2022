@fbhomepage @regression @fb
Feature: Home page

    Background:
        Given I am on facebook homepage

    @linksonfooter @sanity
    Scenario Outline: Verify <linkName> opens in a new tab
        # Given I am on facebook homepage
        When I click on <linkName> link
        Then I verify <linkName> opens in a new tab

        Examples:
            | linkName     |
            | Instagram    |
            | Portal       |
            | Oculus       |
            | Facebook Pay |

    @homepagelinks @smoke @trial
    Scenario: Verify there are 46 links on the landing page
        # Given I am on facebook homepage
        Then I verify 46 links on the homepage


# @instagram
# Scenario: Verify Instagram opens in a new tab
#     Given I am on facebook homepage
#     When I click on Instagram link
#     Then I verify Instagram opens in a new tab

# @portal
# Scenario: Verify Portal opens in a new tab
#     Given I am on facebook homepage
#     When I click on Portal link
#     Then I verify Portal opens in a new tab

# @oculus
# Scenario: Verify Oculus opens in a new tab
#     Given I am on facebook homepage
#     When I click on Oculus link
#     Then I verify Oculus opens in a new tab

# @fbPay
# Scenario: Verify Facebook Pay opens in a new tab
#     Given I am on facebook homepage
#     When I click on Facebook Pay link
#     Then I verify Facebook Pay opens in a new tab