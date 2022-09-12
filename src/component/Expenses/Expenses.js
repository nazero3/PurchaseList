import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.item.map(expens => 
        <ExpenseItem 
        title={expens.title}
        amount={expens.amount}
        date={expens.date} 
        />)}
    </Card>
  );
}

export default Expenses;
