import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store'
import './index.css';
import Layout from './components/Layout'
import RootContainer from './containers/RootContainer'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import 'semantic-ui-css/semantic.css'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const userIsInTeam = (nextState, replace, callback) => {
  if(sessionStorage.getItem('authToken')) {
    callback()
  } else {
    replace('/login');
    callback()
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout} onEnter={userIsInTeam} >
        <IndexRoute  component={RootContainer}  />
      </Route>
      <Route path="login" isLogin={true} component={LoginContainer} />
      <Route path="registration" isLogin={false} component={RegisterContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
