import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import ExpenseListFilters from '../selectors/expenses';
import SumOfExpenses from '../selectors/Expenses-total';

const ExpensesSummary = ({expensesCount, expensesTotal}) =>{
    const expenseWord = expensesCount===1 ? 'expense' : 'expenses';
    const formatterExpenseTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
        <h1>expenses total for {expensesCount}{expenseWord} is {formatterExpenseTotal} </h1>
        </div>
    )
}

const mapStateToProps =(state) => {
     
        const visibleExpenses = ExpenseListFilters(state.expenses,state.filters)
        return {
            expensesTotal: SumOfExpenses(visibleExpenses),
            expensesCount: visibleExpenses.length 
        }
       
 
    
    }

export default connect(mapStateToProps)(ExpensesSummary);
