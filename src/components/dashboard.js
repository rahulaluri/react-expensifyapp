import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseSummary from './ExpenseSummary';
const ExpenseDashboard = () => (
  <div>
    This is from my dashboard component!
    <ExpenseSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
