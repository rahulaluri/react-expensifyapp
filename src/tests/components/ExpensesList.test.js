import React from 'react';
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/ExpensesList';

const expenses = [{
    description:'love',
    note: '12312',
    amount: 0,
    createdAt:0
}, {description:'loadave',
note: '123asd12',
amount: 0,
createdAt:0}];

test('Should render the expense list correctly', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should render the empty expense list correctly', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})

