import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Default State
const expensesReducerDefaultState = [];
const filtersDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
}

// Expenses Reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
        default:
            return state;
    }
}

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

const removeExpense = ({id} = {}) => ({type: "REMOVE_EXPENSE", id})

//Filters Reducer
const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Creating Store using combine reducer
const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer}));

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({descreption: 'JAnuary Rent', note: 'Need to pay', amount: 54500, createdAt: 0}));
const expenseTwo = store.dispatch(addExpense({descreption: 'Coffee', note: "Don't drink too  much", amount: 500}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));
