import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/editExpensePage';

const expense = [{
    id:1,
    description:'love',
    note: '12312',
    amount: 12312,
    createdAt:0
}];

const expenseUpdate = [{
    id:1,
    description:'love1312312',
    note: '12312',
    amount: 12312,
    createdAt:0
}];

let editExpense,history,removeExpense,wrapper;

beforeEach(()=>{
    editExpense= jest.fn();
    removeExpense=jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        history={history}
        expense={expense} 
        removeExpense={removeExpense}
    />)
})
test('Should render the editExpensePage', ()=>{
    expect(wrapper).toMatchSnapshot();    
})

test('Should render added expense related functions correctly', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenseUpdate);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense.id,expenseUpdate);
 })
 
 test('Should render remove expense related functions correctly', ()=> {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expense.id});
 })
 