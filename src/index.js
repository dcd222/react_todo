import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './base/app';
import ReduxTodo from './redux/reduxTodo';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render((
  <Router>
    <Link to={'/redux'}>redux todo</Link>
    <Link to={'/'}>base todo</Link>
    <Switch>
      <Route path='/redux' component={ReduxTodo}/>
      <Route path="/" component={App}/>
    </Switch>
  </Router>
), document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
