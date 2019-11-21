import React from 'react';
import {shallow} from 'enzyme';
import Login from '../../components/loginPage';

test("Should display the login page correctly",()=>{
const wrapper = shallow(<Login/>);
expect(wrapper).toMatchSnapshot();    
})

test('Should render onClick event correctly', ()=>{
    const startLogin = jest.fn();
    const wrapper = shallow(<Login startLogin={startLogin}/>);
    wrapper.find('button').prop('click')
    expect(startLogin).toHaveBeenCalled();
})

