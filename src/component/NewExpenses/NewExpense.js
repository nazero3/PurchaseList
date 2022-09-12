import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const SaveExpenseFormHandler = (enteredValue) =>{
        const expenseData ={
            ...enteredValue,
            id: Math.random().toString()
        };
        props.onSaveNewExpense(expenseData)
    };
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseForm={SaveExpenseFormHandler} />
        </div>
    );
}

export default NewExpense;