import { combineReducers } from 'redux';
import LoginReducer from './isLogin';
import SetLoginReducer from './setLogin';
/**
* Creates the global state by combining all the reducer content into 1 global state object
*/
const rootReducer = combineReducers({
  isLoggedIn: LoginReducer, setLogin: SetLoginReducer
});

export default rootReducer;
