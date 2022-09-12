import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
<<<<<<< HEAD
      <div className="expense-date__day">{day}</div>
=======
      <div className="expense-date__year">{day}</div>
>>>>>>> 17b3f82bb6636c80127696c0ca6fbe0820e96eef
    </div>
  );
}

export default ExpenseDate;
