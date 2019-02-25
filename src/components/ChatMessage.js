import React,{Component} from 'react'
import { firebaseDB } from '../firebase/firebase'

const messagesRef = firebaseDB.ref('messages')

class ChatMessage  extends Component {
  constructor(props) {
    super(props)
    this.onRemoveClick = this.onRemoveClick.bind(this)
  }
  onRemoveClick(){
     messagesRef.child(this.props.message.key).remove()
     alert('メッセージはページを更新した後に削除されます')
  }
  render(){
    const space = {
      margin: '20px'
    }
    const message = {
      fontSize: '25px',
      margin: 'initial'
    }
    const user = {
      font: 'message-box',
      margin: '0px 10px',
    }
    return(
      <div className="Message" style={space}>
        <p className="MessageText" style={message}>{this.props.message.text}</p>
        <p className="MessageName" style={user}>by&nbsp;{this.props.message.user_name}</p>
        <button className="MessageRemove" onClick={this.onRemoveClick}>削除</button>
      </div>
    )
  }
}

export default ChatMessage