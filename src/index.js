import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './base/app';
import ReduxTodo from './redux/reduxTodo';
import MDEditor from './markdown/md';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store} from './store/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render((
  <Router>
    <Link to={'/redux'}>redux todo</Link>
    <Link to={'/base'}>base todo</Link>
    <Link to={'/md'}>markdown</Link>
    <Switch>
      <Provider store={store}>
        <Route path='/redux' component={ReduxTodo} />
        <Route path='/base' component={App}/>
        <Route path='/md' component={MDEditor}/>

      </Provider>

    </Switch>
  </Router>
), document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
