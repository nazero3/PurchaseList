<<<<<<< HEAD
import React  from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    
    const onSelectHandler =(event)=>{
        //console.log(event.target.value);
        props.onSaveExpensesFilter(event.target.value);
    }
=======
import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = () => {
>>>>>>> 17b3f82bb6636c80127696c0ca6fbe0820e96eef
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
<<<<<<< HEAD
        <select value={props.selected} onChange={onSelectHandler}>
=======
        <select>
>>>>>>> 17b3f82bb6636c80127696c0ca6fbe0820e96eef
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;