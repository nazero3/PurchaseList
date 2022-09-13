import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [titleDefault, savesTitle] = useState('');
  const [amountDefault, savesAmount] = useState('');
  const [dateDefault, savesDate] = useState('');

  const titleChangeHandler = (event) => {
    savesTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    savesAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    savesDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleDefault,
      amount: amountDefault,
      date: new Date(dateDefault),
    };
    
    props.onSaveExpenseForm(expenseData);

    savesTitle('');
    savesAmount('');
    savesDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={titleDefault}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amountDefault}
            type='number'
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateDefault}
            min="2019-02-16"
            max="2022-03-19"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
