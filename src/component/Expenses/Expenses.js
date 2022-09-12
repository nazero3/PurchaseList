import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
<<<<<<< HEAD
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [defaultYear, filteredYear] = useState("2020");
  const SaveExpensesFilter = (enteredY) => {
    //console.log('nice v2');
    filteredYear(enteredY);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={defaultYear}
          onSaveExpensesFilter={SaveExpensesFilter}
        />
        {props.item.map((expense) => {
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />;
        })}
      </Card>
    </div>
=======
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
    </Card>
>>>>>>> 17b3f82bb6636c80127696c0ca6fbe0820e96eef
  );
}

export default Expenses;
