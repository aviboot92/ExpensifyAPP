import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import {ExpenseList} from './../../components/ExpenseList';

const expenses = [
    {
        id: '1',
        descreption: 'Gum',
        note: '',
        amount: 100,
        createdAt: moment(0)
    }, {
        id: '2',
        descreption: 'Rent',
        note: '',
        amount: 10025,
        createdAt: moment(0)
            .subtract(4, 'days')
            .valueOf()
    }, {
        id: '3',
        descreption: 'Credit card',
        note: '',
        amount: 4500,
        createdAt: moment(0)
            .add(4, 'days')
            .valueOf()
    }
];

test('should render expenses correctly with expense',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses correctly without expense',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});