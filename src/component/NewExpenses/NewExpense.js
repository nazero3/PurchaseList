import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


function NewExpense(props) {
    const [isEditing, setIsEdititng] = useState(false);
  const SaveExpenseFormHandler = (enteredValue) => {
    const expenseData = {
      ...enteredValue,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(expenseData);
    setIsEdititng(false)
  };
  
  const setIsEdititngHandler= () =>{
    setIsEdititng(true)
  }
  const stopEditingHandler = () => {
    setIsEdititng(false)
  }  
  return (
    <div className="new-expense">
        {!isEditing && (<button onClick={setIsEdititngHandler}>Add new Expense</button>)}
        {isEditing && (<ExpenseForm onSaveExpenseForm={SaveExpenseFormHandler} onCancel={stopEditingHandler}/>)}
    </div>
  );
}

export default NewExpense;
