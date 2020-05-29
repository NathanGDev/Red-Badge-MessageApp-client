import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Message.css";

type MessageVar = {
  author: string;
  body: string;
  me: boolean;
};


class Message extends Component<any, any> {
  static propTypes = {
    author: PropTypes.string,
    body: PropTypes.string.isRequired,
    me: PropTypes.bool,
  };

  render() {
    const classes = classNames("Message", {
      log: !this.props.author,
      me: this.props.me,
    });

    return (
      <div className={classes}>
        {this.props.author && (
          <span className="author">{this.props.author}:</span>
        )}
        {this.props.body}
      </div>
    );
  }
}

export default Message;
