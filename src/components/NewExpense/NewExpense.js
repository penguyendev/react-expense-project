import { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isAdding, setIsAdding] = useState(false);
  const saveExpenseDataHandler = (expenseInputData) => {
    const expenseData = {
      ...expenseInputData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  }

  const stopAddingHandler = () => {
    setIsAdding(false);
  }

  return (
    <div className="new-expense">
      {!isAdding && <button onClick={startAddingHandler}>Add New Expense</button>}
      {isAdding && <ExpenseForm onSaveExpense={saveExpenseDataHandler} onCancel={stopAddingHandler}/>}
    </div>
  );
};
export default NewExpense;
