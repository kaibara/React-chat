import React,{Component} from 'react'

class ChatMessage  extends Component {
  render(){
    return(
      <div className="Message">
        <p className="MessageName">@{this.props.message.user_name}</p>
        <p className="MessageText">{this.props.message.text}</p>
      </div>
    )
  }
}

export default ChatMessage