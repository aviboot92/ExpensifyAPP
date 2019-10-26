import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters'
import getVisisbleExpenses from './selectors/expenses'
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(addExpense({descreption: "January Phone", note: "Speaking phone everyDay", amount: 45000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({descreption: "Tiffin", amount: 5000, createdAt: -5000, note: "Don't speak outside EveryDay"}));
const expenseThree = store.dispatch(addExpense({descreption: "Coffee", amount: 600, createdAt: -2000, note: "Reduce Cafine"}));
store.dispatch(setTextFilter('ph'));

const state = store.getState();
const visibleExpenses = getVisisbleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById("app"));