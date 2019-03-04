import firebase from 'firebase/app'
import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    displayName: state.auth.displayName,
  }
}

const AppContainer = connect(
  mapStateToProps
)(App)

export default AppContainer
