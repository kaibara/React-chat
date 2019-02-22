import React,{Component} from 'react'
import firebase from 'firebase/app'
import {firebaseApp} from '../firebase/firebase'

class ChatForm extends Component {
  render(){
    const divStyle = {
      display: 'inline-grid',
      width: '250px'
    }
    const inputStyle = {
      height: '30px'
    }
    const textareaStyle = {
      height: '60px'
    }
    return(
      <div id='Form' style={divStyle}>
        <input name='user_name' onChange={this.props.onTextChange} placeholder="名前" style={inputStyle}/>
        <textarea name='text' onChange={this.props.onTextChange}  placeholder="メッセージ" style={textareaStyle}/>
        <button className='send' onClick={this.props.onButtonClick}>送信</button>
      </div>
    )
  }
}

export default ChatForm
