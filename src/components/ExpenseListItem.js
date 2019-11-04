import React from 'react';
import { Link } from 'react-router-dom'


const ExpenseListItem = (props) => (
    <div>
        <p><Link to={"/edit/"+(props.id)}> Descreption :{props.descreption}</Link></p>
        <p>Amount: {props.amount/100}</p>
        <p>Created At: {props.createdAt}</p>
        <br/>
    </div>
);

export default ExpenseListItem;