import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MessageForm.css";

interface MessageFormInput {
  onMessageSend: any;
}

type MessageState = {
  contactId: number;
  userId: number;
  salesUserId: number;
  message: string;
  sent: boolean;
  service: string;
};

class MessageForm extends Component<MessageFormInput, MessageState> {
  static propTypes = {
    onMessageSend: PropTypes.func.isRequired,
  };

  contactId: any;
  userId: any;
  salesUserId: any;
  message: any;
  sent: any;
  service: any;

  constructor(props: any) {
    super(props);
    this.state = {
      contactId: 0,
      userId: 0,
      salesUserId: 0,
      message: "",
      sent: true,
      service: "sms",
    };
  }

  componentDidMount = () => {
    this.input.focus();
    // Sets information from the server.
    this.setState({
      // contactId: this.props.contactId,
      // userId: this.props.userId,
      // salesUserId: this.props.salesUserId,
      // message: "",
      // sent: this.props.sent,
      // service: this.props.server,
      contactId: 1,
      userId: 5,
      salesUserId: 5,
      message: "",
      sent: true,
      service: "sms",
    });
  };

  handleFormSubmit = (event: any) => {
    event.preventDefault();
    console.log("==========WERE IN HANDLE SUBMIT===========");
    fetch('http://localhost:3000/message/', {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTkxMDczMjU5LCJleHAiOjE1OTExNTk2NTl9.D1m4hbJUxSa-W4DmaY-J4j4xJ0nUU9ozh_gFrqVUf3o'
      },
      body: JSON.stringify({
        message: {
          contactId: this.contactId,
          userId: this.userId,
          salesUserId: this.salesUserId,
          message: this.message,
          sent: this.sent,
          service: this.service,
        },
      }),
    })
      .then((res: any) => res.json())
      .then((data) => {
        console.log(data);
      });

    this.props.onMessageSend(this.input.value);
    this.input.value = "";
  };
  input: any;

  render() {
    return (
      <form className="MessageForm" onSubmit={this.handleFormSubmit}>
        <div className="input-container">
          <input
            type="text"
            ref={(node) => (this.input = node)}
            placeholder="Enter your message..."
            onChange={(e: any) => this.setState({ message: e.target.value })}
          />
        </div>
        <div className="button-container">
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}

export default MessageForm;
