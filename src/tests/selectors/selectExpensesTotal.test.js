import selectExpensesTotal from "../../selectors/selectExpensesTotal";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test("should correctly add up a single expense", () => {
  const result = selectExpensesTotal([expenses[1]]);
  expect(result).toBe(109500);
});

test("should correctyl add multiple expenses", () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});
