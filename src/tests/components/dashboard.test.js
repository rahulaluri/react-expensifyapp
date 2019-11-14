import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboard from '../../components/dashboard';

test('Should render the expense dashboard correctly', ()=>{
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot();
})
