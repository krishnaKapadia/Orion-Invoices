import { combineReducers } from 'redux';
import LoginReducer from './isLogin';
/**
* Creates the global state by combining all the reducer content into 1 global state object
*/
const rootReducer = combineReducers({
  isLoggedIn: LoginReducer
});

export default rootReducer;
