import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux'

import loginForm from './containers/loginForm/LoginForm.reducers'
import tabForm from './containers/tabForm/TabForm.reducers'
import NavigationTabs from './containers/navigationTabs/NavigationTabs.actions'

const reducers = combineReducers({
  // loginForm,
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

const store = createStore(reducers, {}, enhancer);

export default store;
