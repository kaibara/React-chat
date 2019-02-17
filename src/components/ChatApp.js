import React,{Component} from 'react'
import socketio from 'socket.io-client'
import ChatForm from './ChatForm'

const portNumber = process.env.PORT || 3005
const socket = socketio.connect('http://localhost:' + portNumber)

class ChatApp  extends Component {
  constructor(props){
    super(props)
    this.state = {
      logs: []
    }
  }
  componentDidMount(){
    socket.on('chatMessage',(obj) => {
      const logs2 = this.state.logs
      obj.key = 'key_' + (this.state.logs.length + 1)
      console.log(obj)
      logs2.unshift(obj)
      this.setState({logs: logs2})
    })
  }
  render(){
    const messages = this.state.logs.map(e => (
      <div key={e.key}>
        <span>{e.name}</span>
        <span>: {e.message}</span>
        <p />
      </div>
    ))
    return(
      <div>
        <h1 id='title'>Reactチャット</h1>
        <ChatForm />
        <div id='log'>{messages}</div>
      </div>
    )
  }
}

export default ChatApp