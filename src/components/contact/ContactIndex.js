import withRoot from "../styling/withRoot";
import React, { useState, useEffect, useReducer } from "react";
import { Container, Row, Col } from "reactstrap";
import ContactCreate from "./ContactCreate";
import ContactEdit from "./ContactEdit";
import ContactTable from "./ContactTable";
import NavBar from "../NavBar";
// import APIURL from '../../helpers/environment';

const ContactIndex = (props) => {
  const [contacts, setContacts] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [contactToUpdate, setContactToUpdate] = useState({});

  const { contactSet } = props;

  const fetchContacts = () => {
    console.log("****************" + props.token.sessionToken);
    fetch(`http://localhost:3000/contact/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((contactData) => {
        setContacts(contactData);
      });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const editUpdateContact = (contact) => {
    setContactToUpdate(contact);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  return (
    <Container>
      <ContactCreate fetchContacts={fetchContacts} token={props.token} />
      <ContactTable
        contactSet={contactSet}
        contacts={contacts}
        editUpdateContact={editUpdateContact}
        updateOn={updateOn}
        fetchContacts={fetchContacts}
        token={props.token.sessionToken}
      />
      {updateActive ? (
        <ContactEdit
          contactToUpdate={contactToUpdate}
          updateOff={updateOff}
          token={props.token}
          fetchContacts={fetchContacts}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default withRoot(ContactIndex);
