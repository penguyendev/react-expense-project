import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Masks',
    amount: 67.49,
    date: new Date(2021, 4, 11),
  },
  { id: 'e2', title: 'New Computer', amount: 1599.99, date: new Date(2022, 3, 14) },
  {
    id: 'e3',
    title: 'Phone payments',
    amount: 598.67,
    date: new Date(2022, 4, 28),
  },
  {
    id: 'e4',
    title: 'Tuition',
    amount: 4500,
    date: new Date(2022, 9, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
