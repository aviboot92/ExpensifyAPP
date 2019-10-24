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

        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                return expense
            })

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

const removeExpense = ({id} = {}) => ({type: "REMOVE_EXPENSE", id});

const editExpense = (id, updates) => ({type: "EDIT_EXPENSE", id, updates});

//Filters Reducer
const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.textValue
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }

        default:
            return state;
    }
}

// Action Generators for Filters
const setTextFilter = (textValue = '') => ({type: 'SET_TEXT_FILTER', textValue});

const sortByAmount = () => ({type: "SORT_BY_AMOUNT"});

const sortByDate = () => ({type: "SORT_BY_DATE"});

const setStartDate = (date) => ({type: 'SET_START_DATE', date});

const setEndDate = (date) => ({type: 'SET_END_DATE', date});

// Creating Store using combine reducer
const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer}));
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const textMatch = text === '' || expense.descreption.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= startDate;
        return textMatch && startDateMatch && endDateMatch;
    });
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({descreption: 'JAnuary Rent', note: 'Need to pay', amount: 54500, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({descreption: 'Coffee', note: "Don't drink too  much", amount: 500, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {
    note: "Don't ",
    amount: 100
}));
store.dispatch(setTextFilter("re"));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(250));
