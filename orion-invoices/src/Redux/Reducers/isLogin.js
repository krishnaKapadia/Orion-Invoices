/**
* Reducer returns the default isLoggedIn object in the global state.
*/
export default function(state = false, action) {

  switch(action.type) {
    case 'LOGIN_SET':
      return action.payload;
  }

  return state;
}
