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

test('should render error for invalid  form submission' ,() =>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {preventDefault: ()=>{}});
    expect(wrapper.state('error')).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('should set descreption on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {target: {value: 'New descreption'}});
})

test('should set note on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {target: {value: 'I am Note'}, persist: ()=>{}});
    expect(wrapper.state('note')).toBe('I am Note');
})

test('should set amount on input change', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {target: {value}});
    expect(wrapper.state('amount')).toBe(value);
})

test('should set amount on input change', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {target: {value}});
    expect(wrapper.state('amount')).toBe('');
})