import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/header';

test('Should render the header file corerectly', ()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})
