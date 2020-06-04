import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { Link } from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import SmsIcon from "@material-ui/icons/Sms";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ContactTable = (props) => {
  const { contactSet } = props;

  const deleteContact = (contact) => {
    fetch(`http://localhost:3000/contact/${contact.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchContacts());
  };

  const contactMapper = () => {
    return props.contacts.map((contact, index) => {
      return (
        <Table>
          <TableHead>
            <TableRow key={index}>
              <TableCell>{contact.id}</TableCell>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.mobileNum}</TableCell>
              <TableCell>{contact.fbMsgrId}</TableCell>
              <Link to="/home">
                <IconButton
                  onClick={() => {
                    contactSet(contact);
                  }}
                >
                  <SmsIcon />
                </IconButton>
              </Link>
              <Button
                onClick={() => {
                  props.editUpdateContact(contact);
                  props.updateOn();
                }}
              >
                <UpdateIcon />
              </Button>
              <Button
                onClick={() => {
                  deleteContact(contact);
                }}
              >
                <DeleteIcon />
              </Button>
            </TableRow>
          </TableHead>
        </Table>
      );
    });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>FB Msgr</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{contactMapper()}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default ContactTable;
