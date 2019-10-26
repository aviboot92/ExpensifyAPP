import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
    text: ''
}

// Expenses Action Generators ADD_EXPENSE
const addExpense = (({
    descreption = '',
    amount = 0,
    createdAt = 0,
    note = ''
}) => {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            descreption,
            note,
            createdAt,
            amount
        }
    }
})

// REMOVE_EXPENSE
const removeExpense = (id) => ({type: "REMOVE_EXPENSE", id});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({type: "EDIT_EXPENSE", id, updates});

// Filters action Generators SORT_BY_DATE
const sortByDate = () => ({type: "SORT_BY_DATE"});

//  SORT_BY_AMOUNT
const sortByAmount = () => ({type: 'SORT_BY_AMOUNT'})

// SET_TEXT_FILTER
const setTextFilter = ({
    text = ''
} = {}) => ({type: "SET_TEXT_FILTER", text})

// SET_START_DATE
const setStartDate = (date) => ({type: 'SET_START_DATE', date})

// SET_END_DATE
const setEndDate = (date) => ({type: 'SET_END_DATE', date})

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                return expense.id !== action.id
            });

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                return expense
            });

        default:
            return state;
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
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

const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer}));

const getVisibleExpense = (expenses, {sortBy, startDate, endDate, text}) => {
    return expenses.filter((expense) => {
        const textMatch = text === '' || expense.descreption.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const demoState = {
    expenses: [
        {
            id: "adnajdk",
            descreption: "January Phone",
            amount: "45000",
            createdAt: 0,
            note: "Very Costly"
        }
    ],

    filters: {
        sortBy: "date", // date or amount
        startDate: undefined,
        endDate: undefined,
        text: ''
    }
}

const expenseOne = store.dispatch(addExpense({descreption: "January Phone", note: "Speaking phone everyDay", amount: 45000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({descreption: "Tiffin", amount: 5000, createdAt: -5000, note: "Don't speak outside EveryDay"}));
const expenseThree = store.dispatch(addExpense({descreption: "Coffee", amount: 600, createdAt: -2000, note: "Reduce Cafine"}));
// store.dispatch(removeExpense(expenseTwo.expense.id));
store.dispatch(editExpense(expenseThree.expense.id, {
    amount: 400,
    createdAt: 2000
}));
store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
store.dispatch(setTextFilter({text: "pho"}));
store.dispatch(setTextFilter());
// store.dispatch(setEndDate(3000));
// store.dispatch(setStartDate(1500));
// store.dispatch(editExpense(expenseTwo.expense.id, {note: "DON't eat outside"}));
