import React, {useState} from 'react';
import { version } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title, setTitle]  = useState(props.title);
    const clickHandler = () => {
        setTitle("updated");
        console.log(title);
        console.log(" props amount= ",props.amount)
        console.log(version);
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                {console.log(props.title)}
                <div className='expense-item__price'>${props.amount} </div>
            </div>
            <button onClick={clickHandler}>click me!</button>
        </Card>

    );

}
export default ExpenseItem;