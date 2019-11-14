import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/create';

const expense = [{
    id:1,
    description:'love',
    note: '12312',
    amount: 12312,
    createdAt:0
}]; 

let addExpense, history,wrapper;

beforeEach(()=>{
    addExpense = jest.fn();
    history ={push: jest.fn()};
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
});

test('Should render AddExpense page correctly', ()=> {
     expect(wrapper).toMatchSnapshot();
})

test('Should render added expense related functions correctly', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(addExpense).toHaveBeenCalledWith(expense);
 })
 