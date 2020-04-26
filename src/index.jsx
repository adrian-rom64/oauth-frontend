import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './App';
import Popup from './Popup';

console.log(process.env.REACT_APP_VARIABLE);

const app = (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/auth" component={Popup} />
    </Switch>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
