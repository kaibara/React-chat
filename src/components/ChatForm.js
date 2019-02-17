import React,{Component} from 'react'
import socketio from 'socket.io-client'
import AuthContainer from '../container/AuthContainers'
import firebase from '../firebase/firebase'

const socket = socketio.connect('http://localhost:3005')

class ChatForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      message: ''
    }
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
          <br />
          { this.props.uid ?
            <input value={this.props.displayName} />:
            <input value={this.state.name} onChange={e => this.nameChanged(e)} />
          }
        </div>
        <AuthContainer />
        <br />
        <div className='Message'>
          メッセージ:
          <br />
          <input value={this.state.message} onChange={e => this.messageChanged(e)} />
        </div>
        <button className='send'onClick={e => this.send()}>送信</button>
      </div>
    )
  }
}

export default ChatForm