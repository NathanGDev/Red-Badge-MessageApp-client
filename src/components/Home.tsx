import React from "react";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";
import "./Home.css";
import Message from "./messages/Message";
import "../.env"

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

class Home extends React.Component<any, {messages: any}> {
  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  handleNewMessage = (text: any) => {

    // Send an SMS using Twilio
    // const accountSid = process.env.TWILIO_ACCOUNT_SID;
    // const authToken = process.env.TWILIO_AUTH_TOKEN;

    // const accountSid = "ACc3b07c329cd2ac8ac317f9b4acc48794";
    // const authToken = "b92a4a4576b28dcea35a287f4bd0a176";
    // const client = require("twilio")(accountSid, authToken);

    // client.messages.create({
    //   body: "This is a test Text message from kaelon",
    //   // from: process.env.TWILIO_SMS_NUM, // Twillio Number
    //   from: "+13175763401", // Twillio Number
    //   to: "+12602554797",
    // });

    this.setState({
      messages: [
        ...this.state.messages,
        { me: true, author: "Me", body: text },
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
