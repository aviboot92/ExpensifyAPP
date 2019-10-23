import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';


ReactDOM.render(<AppRouter />, document.getElementById("app"));