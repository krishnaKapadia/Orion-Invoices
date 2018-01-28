export default function(state = null, action) {

  switch (action.type) {
    case 'LOGIN_SET':
      return action.payload;

    default:
      return state;
  }

}
