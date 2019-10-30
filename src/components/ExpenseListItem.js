import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = (props) => (
    <div>
        <p>Descreption :{props.descreption}</p>
        <p>Amount: {props.amount}</p>
        <p>Created At: {props.createdAt}</p>
        <button
            id={props.id}
            onClick={(e) => {
            props.dispatch(removeExpense({id: e.target.id}));
        }}>Remove</button>
        <br/>
    </div>
);

export default connect()(ExpenseListItem);