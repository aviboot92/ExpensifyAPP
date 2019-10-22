import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';          
import 'normalize.css/normalize.css';
import './styles/style.scss';


const ExpenseDashBoardPage = () =>(
    <div>
        <p>I am Dash Board page</p>
    </div>
);

const AddExpensePage = () =>(
    <div>
        <p>I am Add Expense page</p>
    </div>
);

const EditExpensePage = () =>(
    <div>
        <p>I am Edit Expense Page</p>
    </div>
);

const HelpPage = () =>(
    <div>
        <p>I am Help Page</p>
    </div>
);

const NotFoundPage = () =>(
    <div>
        <p>!!!! 404 !!!!</p>
        <Link to="/">Go Home</Link>
    </div>
); 

const Header = () =>(
    <header>
        <h1>Expensify APP</h1>
        <Link to='./'>Home</Link>
        <Link to='./crete'>Add Expense</Link>
        <Link to='./edit'>Edit Expense</Link>
        <Link to='./help'>Help</Link>
    </header>
)

const routes = (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path='./'>
                        <ExpenseDashBoardPage />
                </Route>
                <Route path="./create" component={AddExpensePage}/>
                <Route path="./edit" component={EditExpensePage}/>
                <Route path="./help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routes, document.getElementById("app"));