import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Transaction from './Transaction';

function App() {
  const [transactions, setTransactions] = useState([]);
  const onAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <div className="App">
      
      <h1>Expense tracker</h1>
      <ExpenseForm onAddTransaction={onAddTransaction} />
      <Transaction transactions={transactions} />
    </div>
  );
}

export default App;
