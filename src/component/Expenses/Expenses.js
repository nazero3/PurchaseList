import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [defaultYear, filteredYear] = useState('2020');
  const SaveExpensesFilter = (enteredY) => {
    
    filteredYear(enteredY);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={defaultYear}
          onSaveExpensesFilter={SaveExpensesFilter}
        />
        {props.item.map((expense) => (
          <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            
        ))}
        
      </Card>
    </div>
  );
};

export default Expenses;
