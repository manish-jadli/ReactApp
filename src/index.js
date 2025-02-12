import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "react-datepicker/dist/react-datepicker.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from './store/reducers';
import {Provider} from 'react-redux';

const store=createStore(allReducers);



ReactDOM.render(<Provider store={store}><HashRouter><Router><App /></Router></HashRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
