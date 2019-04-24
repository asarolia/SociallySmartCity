import React from 'react'

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '5wO-dE0krT8.E05wzXepX9Q-Y_Iwk-wkvNEvCmxLXlax9kHYFKWgC4w'
    }
}

componentDidMount(){
  document.getElementById('chatbox').style.display = "block";
  document.getElementById('chatboxbody').style.display = "block";
  window.WebChat.renderWebChat({
        directLine: window.WebChat.createDirectLine({ token: 'token' }),
        userID: 'YOUR_USER_ID'
      }, document.getElementById('chatboxbody'));
}

  render() {
    return (
         <div id="chatbox" role="main">
            <div className="chat-box-header message-header">
                Chat with us
                <button class="delete" onClick={this.props.buttonClick}></button>
        </div>
        <div id="chatboxbody"></div>
        </div>
    )
  }
}

export default ChatBox;