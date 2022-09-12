import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
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
