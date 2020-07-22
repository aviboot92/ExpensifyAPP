import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({descreption: "January Phone", note: "Speaking phone everyDay", amount: 45000, createdAt: 1000}));
store.dispatch(addExpense({descreption: "Tiffin bill", amount: 5000, createdAt: -5000, note: "Don't speak outside EveryDay"}));
store.dispatch(addExpense({descreption: "Coffee bill", amount: 600, createdAt: 2000, note: "Reduce Cafine"}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));