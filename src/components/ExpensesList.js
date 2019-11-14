import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './Expense';
import selectExpenses from '../selectors/expenses';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseList = (props) => (
    <div>
        <ExpenseListFilters />
        {props.expenses.length===0 ? <p>AddExpenses</p> : (props.expenses.map((expense)=><ExpenseListItem key={expense.id} {...expense}/> ))}       
    </div>
);


const mapStatetoProps = (state) =>{
    return  {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStatetoProps)(ExpenseList)




