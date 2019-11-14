import expenses from '../fixtures/expenses'; 
import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

test('should give default state', () => {
    const state = expensesReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
})

test('should remove expense', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    });
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should edit expense', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            descreption: "Rent",
            note: "It has decreased",
            amount: 29500
        }
    });

    expect(state).toEqual([
        expenses[0], {
            id: "2",
            descreption: "Rent",
            note: "It has decreased",
            amount: 29500,
            createdAt: moment(0)
                .subtract(4, 'days')
                .valueOf()
        },
        expenses[2]
    ])
})

test('should not edit expense if id is not found', ()=> {
    const amount = 500;
    const action = {
        id: '-10',
        type: "EDIT_EXPENSE",
        updates:{
            amount
        }
    };
    const state =  expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add expense', () => {
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            descreption: "Debit Card",
            note: "",
            amount: 56897,
            createdAt: moment(0)
                .add(8, 'days')
                .valueOf()
        }
    });

    expect(state).toEqual([...expenses, {
        id: '4',
        descreption: "Debit Card",
        note: "",
        amount: 56897,
        createdAt: moment(0)
            .add(8, 'days')
            .valueOf()
    }])
})