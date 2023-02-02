import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items, updateExpense, deleteExpense, onClick }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          updateExpense={updateExpense}
          deleteExpense={deleteExpense}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
