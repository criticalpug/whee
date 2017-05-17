import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { createStore,
         applyMiddleware,
         compose,
         combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Shop from './shop';
import Shapes from './shapes/shapes';
import shapes from './shapes/shapes.reducer';
import cart from './common/components/cart/cart.reducer';

const INITIAL_STATE = {};

const store = createStore(
  combineReducers({
    shapes,
    cart,
  }),
  INITIAL_STATE,
  compose(applyMiddleware(thunk)),
);

require('./mock/api.js');

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Shop} >
        <IndexRedirect to="/shapes" />
        <Route path="/shapes" component={Shapes} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('shop'),
);
