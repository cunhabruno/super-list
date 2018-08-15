Feature: List app
  Scenario: Main page
    Given I go to the following page "http://localhost:3000/"
    When I mouse hover on "Add button" on "List app main page"
    Then I can see "Add Tooltip" on "List app main page"