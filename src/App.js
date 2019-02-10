import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { saveToLocalStorage } from './localStorage';
import SavedItems from './pages/SavedItems';

store.subscribe(
  _ => saveToLocalStorage(store.getState())
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/register" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/saved-items" component={SavedItems}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
