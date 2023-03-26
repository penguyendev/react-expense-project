import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  // Store inputs
  const titleChangeHandler = (e) => {
    setTitleInput(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmountInput(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDateInput(e.target.value);
  };
  // Form submission
  const submitHandler = (e) => {
    // Stops page from refreshing
    e.preventDefault();
    const expenseData = {
        title: titleInput,
        amount: +amountInput,
        date: new Date(dateInput)
    };
    props.onSaveExpense(expenseData);
    setTitleInput('');
    setAmountInput('');
    setDateInput('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleInput} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountInput}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={dateInput}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
