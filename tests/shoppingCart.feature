Feature: Shopping Cart

  Scenario: All data has been entered correctly
    Given go to url "http://127.0.0.1:8080"
    And enter "Kirk" in the field "name"
    And enter "kirk@test.com" in the field "email"
    And enter "123456789" in the field "phone"
    When click submit
    Then form is submitted successfully

  Scenario: Email is wrong
    Given go to url "http://127.0.0.1:8080"
    And enter "Kirk" in the field "name"
    And enter "abc" in the field "email"
    And enter "123456789" in the field "phone"
    When click submit
    Then show error message

  Scenario: Phone is wrong
    Given go to url "http://127.0.0.1:8080"
    And enter "Kirk" in the field "name"
    And enter "kirk@test.com" in the field "email"
    And enter "abc" in the field "phone"
    When click submit
    Then show error message
