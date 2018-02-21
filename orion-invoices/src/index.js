import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Redux/Reducers/reducers';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss';
// Animation.css library
import './Style/animation.css';

// Containers
import Full from './containers/Full/'
import Authenticate from './components/Authentication/Authenticate';
import Login from './views/Login';

const createReduxStore = compose(applyMiddleware()(createStore));
const history = createBrowserHistory();

// Persisting redux state on refresh
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


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
