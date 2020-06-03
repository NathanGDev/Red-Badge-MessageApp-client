import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MessageForm.css";

// interface MessageFormInput {
//   onMessageSend: any;
// }

type MessageState = {
  contactId: number;
  contactMobileNum: string;
  userId: number;
  salesUserId: number;
  message: string;
  // sent: boolean;
  service: string;
};

// class MessageForm extends Component<MessageFormInput, MessageState> {
class MessageForm extends Component<any, MessageState> {
    static propTypes = {
    onMessageSend: PropTypes.func.isRequired,
  };

  contactId: any;
  contactMobileNum: any;
  userId: any;
  salesUserId: any;
  message: any;
  // sent: any;
  service: any;

  constructor(props: any) {
    super(props);
    this.state = {
      contactId: 0,
      contactMobileNum: "",
      userId: 0,
      salesUserId: 0,
      message: "",
      // sent: true,
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
      contactId: 5,
      contactMobileNum: "2604134797",
      userId: 5,
      salesUserId: 5,
      message: "",
      // sent: true,
      service: "sms",
    });
  };

 handleFormSubmit = (event: any) => {
    event.preventDefault();
    console.log("==========WE'RE IN HANDLE SUBMIT===========");
    console.log("contactId = " + this.contactId);
    console.log("contactMobileNum = " + this.contactMobileNum); 
    console.log("this.state.message = " + this.state.message);   
    var messageData = {
      contactId: 5,
      contactMobileNum: "+12602554797",
      userId: 5,
      salesUserId: 5,
      message: this.state.message,
      sent: true,
      service: "sms"
      // contactId: this.contactId,
      // contactMobileNum: this.contactMobileNum,
      // userId: this.userId,
      // salesUserId: this.salesUserId,
      // message: this.message,
      // sent: this.sent,
      // service: this.service
    };
    console.log('messageData = ' + JSON.stringify(messageData));
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTkxMTE0MzQ0LCJleHAiOjE1OTEyMDA3NDR9.mMhRCdzg5RFViwkKn008nzFUHXGc6TVcDnl0tNzTJPw';
    console.log('token = ' + token);
    var headersData = {
      'Content-type': 'application/json',
      'authorization': token
    }
    console.log('headersData = ' + JSON.stringify(headersData));

    fetch('http://localhost:3000/message/', {
      method: 'POST',
      body: JSON.stringify({message:messageData}),
      headers: new Headers (headersData)
      // headers: new Headers ({
      //   'Content-type': 'application/json',
      //   'authorization': token
      // }),
    })
      .then((res: any) => res.json())
      .then((data) => {
        console.log(data);
      });

    // this.props.onMessageSend(this.input.value);
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
