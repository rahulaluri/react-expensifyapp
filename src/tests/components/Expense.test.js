import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/Expense';

const expenses = [{
    id:1,
    description:'love',
    note: '12312',
    amount: 12312,
    createdAt:0
}, {description:'loadave',
note: '123asd12',
amount: 0,
createdAt:0}];


test('Should render the expense item correctly', ()=>{
    const wrapper = shallow(<ExpenseListItem  {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})
