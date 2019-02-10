import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux'

import loginForm from './containers/loginForm/LoginForm.reducers'
import tabForm from './containers/tabForm/TabForm.reducers'
// import NavigationTabs from './containers/navigationTabs/NavigationTabs.actions'

import { getStateFromLocalStorage } from './localStorage'

const reducers = combineReducers({
  loginForm,
  tabForm,
  // NavigationTabs,
})


const middleware = [thunk];

const composeEnhancers =
process.env.NODE_ENV !== 'production' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'RCTab',
      actionsBlacklist: ['REDUX_STORAGE_SAVE']
    })
  : enhancer => enhancer;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const con = a => {console.log(a); return a}
const store = createStore(reducers, con(getStateFromLocalStorage()), enhancer);

export default store;
