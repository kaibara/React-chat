import firebase from 'firebase/app'
import { connect } from 'react-redux'
import ChatApp from '../components/ChatApp'

 const mapStateToProps = (state) => {
  console.log(state.auth.uid)
  return {
    uid: state.auth.uid,
  }
}

 export const AppContainer = connect(mapStateToProps)(ChatApp)