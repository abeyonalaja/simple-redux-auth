import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import SignUp from './components/auth/signup';
import Feature from './components/feature';
import Welcome from './components/welcome';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ Welcome } />
        <Route path="signin" component={ Signin } />
        <Route path="signup" component={ SignUp } />
        <Route path="feature" component={ RequireAuth( Feature ) } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
