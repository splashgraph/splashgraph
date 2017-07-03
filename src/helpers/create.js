import { createStore as _createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import apiMiddleware from './apiMiddleware';
import create from '../create';
import auth from '../auth';

export default function createStore(history, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [reduxRouterMiddleware, apiMiddleware(), thunk];

  let finalCreateStore;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : null,
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  const reducer = combineReducers({
    routing: routerReducer,
    createState: create.reducer,
    authState: auth.reducer
  });

  return finalCreateStore(reducer, data);
}
