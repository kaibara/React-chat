import firebase from 'firebase/app'
import { connect } from 'react-redux'
import { loginAction,logoutAction } from '../actions/Auth'
import ChatForm from '../components/ChatForm'

const mapStateToProps = (state) => {
  console.log(state.auth.displayName)
  return {
    displayName: state.auth.displayName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Login(){
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    refLogin(){
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          return
        }
       dispatch(loginAction(user))
      })
    },
    Logout(){
      firebase.auth().signOut()
      dispatch(logoutAction())
    }
  }
}

const LogoutStateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatForm)

export default LogoutStateFormContainer
