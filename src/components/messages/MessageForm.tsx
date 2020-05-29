import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MessageForm.css";


interface MessageFormInput {
  onMessageSend: any,
}


class MessageForm extends Component<MessageFormInput> {
  static propTypes = {
    onMessageSend: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    (this.input.focus() as HTMLInputElement).select();
  };

  handleFormSubmit = (event: any) => {
    event.preventDefault();
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
