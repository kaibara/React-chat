import React,{Component} from 'react'
import socketio from 'socket.io-client'
import firebase from '../firebase/firebase'

const portNumber = process.env.PORT || 3005
const socket = socketio.connect('http://localhost:' + portNumber)

class ChatForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      message: '',
      user: null
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }
  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
  logout(){
    firebase.auth().signOut()
  }
  nameChanged(e){
    this.setState({name: e.target.value})
  }
  messageChanged(e){
    this.setState({message: e.target.value})
  }
  send(){
    socket.emit('chatMessage',{
      name: this.state.name,
      message: this.state.message
    })
    this.setState({message: ''})
  }

  render(){
    return(
      <div id='Form'>
        <div className='Name'>
          名前:
          {this.state.user ? (
            <div className='login'>
              <h2>{this.state.user.displayName}</h2>
              <button value={this.state.user.displayName} onClick={e => this.nameChanged(e)}>この名前を使用する</button>
              <button onClick={this.logout}>違う名前を使用する</button>
            </div>
          ) :(
            <input value={this.state.name} onChange={e => this.nameChanged(e)}/>
          )}
          <br />
          {!this.state.user ?
            <button onClick={this.login}>Goggle Login</button> : null
          }
        </div>
        <br />
        <div className='Message'>
          メッセージ:
          <br />
          <input value={this.state.message} onChange={e => this.messageChanged(e)} />
        </div>
        <button className='send' onClick={e => this.send()}>送信</button>
      </div>
    )
  }
}

export default ChatForm