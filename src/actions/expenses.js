import uuid from 'uuid';

// Action Generators for Expenses Reducer
const addExpense = ({
    descreption = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        descreption,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({type: "REMOVE_EXPENSE", id});

const editExpense = (id, updates) => ({type: "EDIT_EXPENSE", id, updates});

export {addExpense, removeExpense, editExpense};