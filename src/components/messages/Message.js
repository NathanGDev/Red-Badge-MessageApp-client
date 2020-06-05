import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import PropTypes from "prop-types";
// import {Table, Button} from 'reactstrap';
// import APIURL from '../../helpers/environment';

const MessageCards = (props) => {
  const deleteMessage = (message) => {
    fetch(`http://localhost:3000/message/${message.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchMessages());
  };

  const messageMapper = () => {
    return props.messages.map((message, index) => {
      return (
        <Card key={index}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h6" component="h2" color="primary">
              {message.firstName} {message.lastName}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {message.mobileNum}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {message.fbMsgrID}
            </Typography>
          </CardContent>
          <Button
            color="primary"
            onClick={() => {
              props.editUpdateMessage(message);
              props.updateOn();
            }}
          >
            <UpdateIcon />
            Edit
          </Button>
          <Button
            color="primary"
            onClick={() => {
              deleteMessage(message);
            }}
          >
            <DeleteIcon />
            Delete
          </Button>
        </Card>
      );
    });
  };

  return (
    <React.Fragment>
      <Card>{messageMapper()}</Card>
    </React.Fragment>
  );
};
export default MessageCards;
