import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const defaultYears = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  const afternorm = (event) => {
    console.log(event.target.value);
    defaultYears.filter(
      (year) => year.props.date.getFullYear() === event.target.value
    );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {defaultYears}
      {afternorm}
      {console.log(defaultYears[0].props.date.getFullYear())}
      
    </Card>
  );
}

export default Expenses;
