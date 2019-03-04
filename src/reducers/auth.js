const initialState = {
  displayName: null
}

const auth = (state=initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return Object.assign({}, state, {
        displayName: action.payload.displayName
      })
    }
    case 'LOGOUT': {
      return Object.assign({}, state, {
        displayName: null
      })
    }
    default: {
      return state
    }
  }
}

export default auth
