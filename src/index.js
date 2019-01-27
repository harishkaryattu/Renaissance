import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Components/font-awesome/css/font-awesome.min.css'
import './Components/css/agency.min.css'

// import 'https://fonts.googleapis.com/css?family=Montserrat:400,700';
// import 'https://fonts.googleapis.com/css?family=Kaushan+Script';
// import 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700';
// import 'https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic';


ReactDOM.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
