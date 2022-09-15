import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import ExpensePrior from './ExpensePrior';
function NewExpense(props){
    const SaveExpenseFormHandler = (enteredValue) =>{
        const expenseData ={
            ...enteredValue,
            id: Math.random().toString()
        };
        props.onSaveNewExpense(expenseData);
        console.log('im in new expenses!')
    };
    const decideForm = () => {
        
    }
    return(
        <div className='new-expense'>
            {/* <ExpenseForm onSaveExpenseForm={SaveExpenseFormHandler} /> */}
            <ExpensePrior/>
        </div>
    );
}

export default NewExpense;