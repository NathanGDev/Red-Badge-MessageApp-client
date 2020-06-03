import React from "react";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";
import "./Home.css";
import Message from "./messages/Message";

// type MessageSender = {
//   messages: [];
// };

interface MessageSender {
  clearToken: any;
}
//
// type Messages = {
//   me: boolean;
//   author: string;
//   body: string;
// };

class Home extends React.Component<any, { messages: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: new Headers({}),
      body: JSON.stringify({ message:}),
    })
  }

  handleNewMessage = (text: any) => {
    this.setState({
      messages: [
        ...this.state.messages,
        { me: true, author: "kaelon", body: text },
      ],
    });
  };
  render() {
    return (
      <div className="chatBox-main">
        <h1 className="home-h1">Home page</h1>
        <div className="chatBox">
          <MessageList messages={this.state.messages} />
          <MessageForm onMessageSend={this.handleNewMessage} />
        </div>
      </div>
    );
  }
}

export default Home;
