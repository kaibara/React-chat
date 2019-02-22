import React,{Component} from 'react'
import firebase from 'firebase/app'
import {firebaseApp} from '../firebase/firebase'

class ChatForm extends Component {
  render(){
    return(
      <div id='Form'>
        <input name='user_name' onChange={this.props.onTextChange}   placeholder="名前" />
        <textarea name='text' onChange={this.props.onTextChange} />
        <button className="" onClick={this.props.onButtonClick}>送信</button>
      </div>
    )
  }
}

export default ChatForm
