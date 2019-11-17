import React from 'react';
import {shallow} from 'enzyme';
import SumOfExpenses from '../../selectors/Expenses-total';

const expenses = [{
    id:1,
    description:'love',
    note: '1',
    amount: 1,
    createdAt:0
}
,{
    id:2,
    description:'love12312',
    note: '12312',
    amount: 2,
    createdAt:0
},
{
    id:3,
    description:'qeqwe',
    note: '12312',
    amount: 3,
    createdAt:0
}
];

test('Should render the expense total', ()=>{
    const result = SumOfExpenses(expenses);
    expect(result).toBe(6);
    console.log(result)
});

