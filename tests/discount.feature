Feature: Discount
  1. When price is greater than $200, get 80% discount
  2. When price is greater than $100 but lower than $200, get 90% discount
  3. When price is lower than $100, no discount

  Scenario: 當金額高於 200 元時，可享有 80% 折扣
    Given 顧客消費總金額為 "250" 元
    When 計算折扣後金額
    Then  折扣後金額應該為 "200" 元

