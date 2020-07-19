import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from "react-redux";
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <ExpenseForm 
          onSubmit={(expense) =>{
            props.addExpense({...expense});
              props.history.push("/");
          }}/>
    </div>
);

const mapDispatchToProps = {
    addExpense
}

export default connect(null, mapDispatchToProps)(AddExpensePage);