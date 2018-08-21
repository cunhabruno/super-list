Feature: List app

  Scenario: add item to list
    Given I go to the following page "http://localhost:3000/"
    When I fill in "search" input on "List app main" with the value "arroz integral"
    And I press the key "enter"
    Then I can see "List Item" on "List app main" with the text "arroz integral"

  Scenario: Mouse hover add button
    Given I go to the following page "http://localhost:3000/"
    When I mouse hover on "Add button" on "List app main page"
    Then I can see "Add Tooltip" on "List app main page"