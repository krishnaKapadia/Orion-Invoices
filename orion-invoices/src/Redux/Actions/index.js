// Action creators

export function setLogin(value) {
  console.log('login = ', value);

  return {
    type: 'LOGIN_SET',
    payload: value
  }
}
