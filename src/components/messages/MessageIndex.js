import withRoot from "../styling/withRoot";
import React, { useState, useEffect, useReducer } from "react";
import { Container, Row, Col } from "reactstrap";
import MessageCreate from "./MessageCreate";
import MessageTable from "./MessageTable";
// import APIURL from '../../helpers/environment';

const MessageIndex = (props) => {
  const [messages, setMessages] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [messageToUpdate, setMessageToUpdate] = useState({});

  const { messageSet } = props;
  const { contact } = props;

  const fetchMessages = () => {
    console.log("****************" + JSON.stringify(contact));
    let url = `http://localhost:3000/message/contact/` + contact.id;

    fetch(url, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((messageData) => {
        setMessages(messageData);
        console.log("++++++++++++++++++++" + messageData);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const editUpdateMessage = (message) => {
    setMessageToUpdate(message);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  return (
    <Container>
      <MessageTable
        contact={contact}
        messageSet={messageSet}
        messages={messages}
        editUpdateMessage={editUpdateMessage}
        updateOn={updateOn}
        fetchMessages={fetchMessages}
        token={props.token.sessionToken}
      />
      <MessageCreate
        contact={contact}
        fetchMessages={fetchMessages}
        token={props.token}
      />
      {/* {updateActive ? ( */}
      {/* <MessageEdit
        messageToUpdate={messageToUpdate}
        updateOff={updateOff}
        token={props.token}
        fetchMessages={fetchMessages}
        /> */}
      {/* ) : ( */}
      <></>
      {/* )} */}
    </Container>
  );
};

export default withRoot(MessageIndex);
