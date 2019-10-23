import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Expensify APP</h1>
        <NavLink activeClassName='is-active' exact to='/'>Home</NavLink>
        <NavLink activeClassName='is-active' to='/create'>Add Expense</NavLink>
        <NavLink activeClassName='is-active' to='/help'>Help</NavLink>
    </header>
);

export default Header;