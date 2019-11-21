import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import {shallow} from 'enzyme';
import {startLogout} from '../../actions/auth';
import Header from '../../components/header';

test('Should render the header file corerectly', ()=>{
    const wrapper = shallow(<Header startLogout={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should render onClick event correctly', ()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').prop('click')
    expect(startLogout).toHaveBeenCalled();
})


