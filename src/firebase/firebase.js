import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDJmFsx13ND_5YRA54XYA_QW4jC6ARr0J8",
  authDomain: "react-chat-b0e8a.firebaseapp.com",
  databaseURL: "https://react-chat-b0e8a.firebaseio.com",
  projectId: "react-chat-b0e8a",
  storageBucket: "react-chat-b0e8a.appspot.com",
  messagingSenderId: "475340827798"
}

firebase.initializeApp(config)

export default firebase