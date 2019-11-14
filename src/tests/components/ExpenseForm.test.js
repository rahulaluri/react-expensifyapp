import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';



const expense = [{
    id:1,
    description:'love',
    note: '12312',
    amount: 12312,
    createdAt:0
}];


test('Should render the expense form correctly', ()=>{
    const wrapper = shallow(<ExpenseForm state={expense[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should render the expense form correctly with one expense', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expense[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should render the error', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('Should set description when input changes', ()=>{
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
})

test('Should set note when textarea changes', ()=>{
    const value = 'new notes';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
})

test('Should set amount value when a valid input is passed', ()=>{
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('Should not set amount value when a invalid input is passed', ()=>{
    const value = '23.5012';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
})

test('Should change values when a new expense is added',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper=shallow(<ExpenseForm onSubmit={onSubmitSpy} expense={expense}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    })
    expect(onSubmitSpy).toHaveBeenCalledWith([{
    description: expense.description,
    amount: expense.amount,
    note: expense.note,
    createdAt: expense.createdAt
    }])    
})

test('Should change on date change',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should change the calendar focus on change',()=>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')(true);
    expect(wrapper.state('calenderFocused')).toEqual(true)
})

