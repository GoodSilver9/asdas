import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ items, updateExpense, deleteExpense }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={setFilteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses}
          updateExpense={updateExpense}
          deleteExpense={deleteExpense}
        />
      </Card>
    </div>
  );
};

export default Expenses;
