import moment from 'moment';
import expensesReducer from './../../reducers/expenses';

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

test('should give default values of expenses Reducer', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})

test('should remove expense if id is found', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: '2'
    });
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should,t remove expense if id is not found', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    });
    expect(state).toEqual(expenses);
})

test('should edit the expense', () => {
    const updates = {
        descreption: 'Debit Card'
    }
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates
    });
    expect(state[2].descreption).toBe('Debit Card');
})

test('should not edit the expense if id is not valid', () => {
    const updates = {
        descreption: 'Debit Card'
    }
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: '8',
        updates
    });
    expect(state).toEqual(expenses);
})

test('should add a expense to expenses', () => {
    const expense = {
        id: '4',
        descreption: 'Ball',
        note: '',
        amount: 100,
        createdAt: moment()
    }
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense});
    expect(state).toEqual([...expenses, expense]);
})