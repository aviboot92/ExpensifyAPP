import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from './../../components/ExpenseListItem';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem id="7" amount="1000" descreption="Coffee" createdAt= {10222}/>);
    expect(wrapper).toMatchSnapshot();
})