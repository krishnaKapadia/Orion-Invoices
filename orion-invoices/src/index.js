import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

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

ReactDOM.render((
  <Provider store={createReduxStore(rootReducer)}>
    <HashRouter>
      <Switch>
        {/* Requires user login to access app */}
        <Route path="/login" name="Login" component={Login}/>
        <Redirect from="/" to="/login"/>
        <Route component={Authenticate}>
          <Route path="/" name="Home" component={Full} />
        </Route>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
