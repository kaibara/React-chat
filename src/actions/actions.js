export const LOGIN_OK = 'LOGIN_OK'
export const LOGOUT = 'LOGOUT'

export const loginOk = (user) => {
  return {
    type: LOGIN_OK,
    payload: {
      displayName: user.displayName,
      uid: user.uid
    }
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  }
}