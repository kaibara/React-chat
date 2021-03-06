import React, { Component } from 'react'
import firebase from 'firebase/app'
import { firebaseApp,firebaseDB } from '../firebase/firebase'
import ChatMessage from './ChatMessage'
import ChatForm from '../containers/ChatFormContainer'

const messagesRef = firebaseDB.ref('messages')

class App extends Component {
  constructor(props) {
    super(props)
    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.state = {
      messages : []
    }
  }

  componentWillMount() {
    messagesRef.on('child_added', (snapshot) => {
      const m = snapshot.val()
      let msgs = this.state.messages
      msgs.push({
        'text' : m.text,
        'user_name' : m.user_name,
        'key': snapshot.key
      })
      this.setState({ messages : msgs })
    })
  }
  onTextChange(e) {
   if(e.target.name == 'user_name') {
     this.setState({
       'user_name': e.target.value
     });
   } else if (e.target.name == 'text') {
     this.setState({
       'text': e.target.value
     });
   }
 }
 onButtonClick() {
   if(this.state.user_name == "") {
     alert('名前を入力してください')
     return
   } else if(this.state.text == "") {
     alert('メッセージを入力してください')
     return
   }
   messagesRef.push({
     'user_name' : this.state.user_name,
     'text' : this.state.text
   })
   this.setState({'text': ""})
 }
 render() {
    const AppStyle = {
      width: '100%',
      height: '100%',
      display: '-webkit-box'
    }
    const MessageSize = {
      width: '35%'
    }
    const Url = {
      fontSize: '20px',
      fontWeight: '500'
    }
    return (
      <div className="App" style={AppStyle}>
        <div className="MessageList" style={MessageSize}>
          <h2>メッセージログ</h2>
          <a href="https://github.com/kaibara/React-chat" target="_blank" style={Url}>Github: kaibara/React-chat</a>
          {this.state.messages.map((m, i) => {
            return <ChatMessage key={i} message={m} />
          })}
        </div>
        <ChatForm onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
      </div>
    )
  }
}

export default App;
