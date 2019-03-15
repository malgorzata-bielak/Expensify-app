import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import PropTypes from "prop-types";
import selectExpenses from "../selectors/selectExpenses";
import selectExpensesTotal from "../selectors/selectExpensesTotal";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling{" "}
          <span>{formattedExpensesTotal}</span>
          <div className="page-header__actions">
            <Link className="button" to="/create">
              Add Expense
            </Link>
          </div>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

ExpensesSummary.propTypes = {
  expenseCount: PropTypes.number.isRequired,
  expensesTotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ExpensesSummary);
