import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment'
import ExpenseForm from './../../components/ExpenseForm';

const expense = {
    id: '3',
    descreption: 'Credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0)
        .add(4, 'days')
        .valueOf()
}

test('should render ExpenseForm correctly', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expense}/>);
    expect(wrapper).toMatchSnapshot();
});