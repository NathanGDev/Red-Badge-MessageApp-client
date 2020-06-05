import React from "react";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";
import "./Home.css";
import Message from "./messages/Message";
import "../.env";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  handleNewMessage = (text) => {
    // Send an SMS using Twilio
    // const accountSid = process.env.TWILIO_ACCOUNT_SID;
    // const authToken = process.env.TWILIO_AUTH_TOKEN;

    const accountSid = "ACc3b07c329cd2ac8ac317f9b4acc48794";
    const authToken = "3b27cc891495722768902bad546a0608";
    const client = require("twilio")(accountSid, authToken);

    console.log('&&&&&&& In Home.js &&&&&&&')

    client.messages.create({
      body: text,
      from: "+13175763401", // Twillio Number
      to: "+12602554797",
    });

    this.setState({
      messages: [
        ...this.state.messages,
        { me: true, author: "kaelon", body: text },
      ],
    });
  };
  render() {
    console.log(this.props.contact);
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
