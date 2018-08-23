Feature: List app

  Scenario: Open page
    Given I go to the following page "http://localhost:3000/"

  Scenario Outline: add item to list - enter key
    When I fill in "search" input on "List app main page" with the value <ITEM>
    And I press the key "Enter"
    Then I can see "List Item" on "List app main page" with the text <ITEM>
    Examples:
      | ITEM     |
      | "Arroz"  |
      | "Feijao" |
      | "Ovos"   |

  Scenario Outline: add item to list - add button
    When I fill in "search" input on "List app main page" with the value <ITEM>
    And I click on "Add button" on "List App main page"
    Then I can see "List Item" on "List app main page" with the text <ITEM>
    Examples:
      | ITEM        |
      | "chocolate" |
      | "maça"      |
      | "pera"      |

  Scenario Outline: search for item
    When I fill in "search" input on "List app main page" with the value <ITEM>
    Then I can see "List Item" on "List app main page" with the text <ITEM>
    Examples:
      | ITEM        |
      | "chocolate" |
      | "maça"      |
      | "pera"      |

  Scenario Outline: mark item as done
    When I fill in "search" input on "List app main page" with the value <ITEM>
    And I click on "List Item" on "List App main page" with the text <ITEM>
    Then I can see "List Item Checkbox" selected on "List app main page" with the text <ITEM>
    And I click on "List Item" on "List App main page" with the text <ITEM>
    Then I can see "List Item Checkbox" unselected on "List app main page" with the text <ITEM>
    Examples:
      | ITEM        |
      | "chocolate" |
      | "maça"      |
      | "pera"      |

  Scenario Outline: Delete Item
    When I fill in "search" input on "List app main page" with the value <ITEM>
    And I click on "Trash button" on "List App main page" with the text <ITEM>
    Then I can NOT see "List Item" displayed on "List app main page" with the text <ITEM>
    Examples:
      | ITEM        |
      | "chocolate" |
      | "maça"      |
      | "pera"      |

  Scenario: Mouse hover add button
    When I mouse hover on "Add button" on "List app main page"
    Then I can see "Add Tooltip" on "List app main page"