import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // Creating Store using combine reducer
const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer}));
return store;
}

