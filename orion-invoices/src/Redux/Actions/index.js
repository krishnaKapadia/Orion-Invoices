// Action creators

// Sets isLoggedIn to the passing in value
export function setLogin(value) {
  return {
    type: 'LOGIN_SET',
    payload: value
  }
}
