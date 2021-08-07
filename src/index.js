import React from 'react';

import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import App from './views/components/App';

import "bootstrap/dist/css/bootstrap.min.css";
import "./views/assets/css/animate.min.css";
import "./views/assets/css/styles.css";
import "./views/assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <App {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
