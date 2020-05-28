import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MessageList.css";

type MessageProps = {
  messages: string;
  defaultProps: any;
};

class MessageList extends Component<MessageProps> {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
  };
  static defaultProps = {
    messages: [],
  };
  render() {
    return (
      <div className="MessageList">
        {this.props.messages.map((message: any, i: any) => (
          <div>
            {message.author && (
              <span className="author">{message.author}:</span>
            )}
            {message.body}
          </div>
        ))}
        <div>Connecting...</div>
        <div>
          <span className="author">You:</span> Hello!
        </div>
        <div>
          <span className="author">Them:</span> Hey there!
        </div>
      </div>
    );
  }
}

export default MessageList;
