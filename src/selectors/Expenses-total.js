import React from 'react';
import {ExpenseListFilters} from '../components/ExpenseListFilters';
import { connect } from 'react-redux';



const SumOfExpenses = (expenses) => (

     expenses.map((expense)=>(expense.amount)
                    )
                  .reduce((
                    (acc,currentValue)=>
                  acc+currentValue),0)

    
    
)


export default SumOfExpenses;