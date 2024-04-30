Feature: Hear Shout
  Scenario: Listener is within a Range
    Given Lucy is located 15 meters from Sean
    When Sean shouts "Hello"
    Then Lucy hears Sean's message