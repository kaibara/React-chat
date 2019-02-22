import React,{Component} from 'react'

class ChatMessage  extends Component {
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
        <button className="MessageRemove" onClick={this.props.onRemoveClick}>削除</button>
      </div>
    )
  }
}

export default ChatMessage