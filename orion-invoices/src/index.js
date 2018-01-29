import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Redux/Reducers/reducers';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'
import Authenticate from './components/Authentication/Authenticate';
import Login from './views/Login';

const createReduxStore = applyMiddleware()(createStore);
const history = createBrowserHistory();

ReactDOM.render((
  <Provider store={createReduxStore(rootReducer)}>
    <HashRouter>
      <Switch>
        {/* Requires user login to access app */}
        <Route history={history} path="/" name="Home" component={Full} />

        {/* <Redirect from="/" to="/login"/> */}
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
