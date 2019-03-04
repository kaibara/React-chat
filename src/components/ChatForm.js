import React,{Component} from 'react'
import firebase from 'firebase/app'
import {firebaseApp} from '../firebase/firebase'

class ChatForm extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.refLogin()
  }
  render(){
    const fullWidth = {
      width: '100%'
    }
    const halfWidth = {
      width: '50%'
    }
    const divStyle = {
      display: 'inline-grid',
      position: 'fixed',
      margin: '10px'
    }
    const inputStyle = {
      height: '30px',
      width: '98.5%'
    }
    const textareaStyle = {
      height: '60px',
      marginTop: '10px'
    }
    const ButtonStyle = {
      display: 'flex',
      width: '100%'
    }
    return(
      <div id='Form' style={divStyle}>
        {this.props.displayName ?
          <div className='login'>
            <h2>{this.props.displayName}</h2>
              <div className='buttons' style={ButtonStyle}>
                <button name='user_name' value={this.props.displayName} onClick={this.props.onTextChange} style={halfWidth}>この名前を使う</button>
                <button onClick={this.props.Logout} style={halfWidth}>違う名前を使う</button>
              </div>
          </div> :
          <div className='logout'>
            <input name='user_name' onChange={this.props.onTextChange} placeholder='名前' style={inputStyle}/>
            <button onClick={this.props.Login} style={fullWidth}>Goggle Login</button>
          </div>
        }
        <textarea name='text' onChange={this.props.onTextChange}  placeholder='メッセージ' style={textareaStyle}/>
        <button className='send' onClick={this.props.onButtonClick}>送信</button>
      </div>
    )
  }
}

export default ChatForm
