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
import Tooltip from '@material-ui/core/Tooltip';
// import APIURL from '../../helpers/environment';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  tableCell: {
   maxWidth: 50, 
  },
});


const ContactTable = (props) => {
  const { contactSet } = props;
  const classes = useStyles();


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
        // <TableContainer>
        // <Table className={classes.table}>
          // <TableBody>
            <TableRow key={contact.id}> {/*works w index*/}
              {/* <TableCell>{contact.id}</TableCell> */}
              <TableCell className={classes.tableCell} component="th" scope="row" align="left">{contact.firstName}</TableCell>
              <TableCell align="left">{contact.lastName}</TableCell>
              <TableCell align="left">{contact.mobileNum}</TableCell>
              <TableCell align="left">{contact.fbMsgrId}</TableCell>

              <TableCell align="left">
              <Link to="/home">
                <Tooltip title="Text Message">
                <Button
                  onClick={() => {
                    contactSet(contact);
                  }}
                >
                  <SmsIcon />
                </Button>
                </Tooltip>
              </Link>
              </TableCell>

              <TableCell align="left">
              <Tooltip title="Edit">
              <Button
                onClick={() => {
                  props.editUpdateContact(contact);
                  props.updateOn();
                }}
              >
                <UpdateIcon />
              </Button>
              </Tooltip>
              </TableCell>

              <TableCell align="left">
              <Tooltip title="Delete">
              <Button
                onClick={() => {
                  deleteContact(contact);
                }}
              >
                <DeleteIcon />
              </Button>
              </Tooltip>
              </TableCell>
            </TableRow>
          // </TableBody>
        // </Table>
        // </TableContainer>
      );
    });
  };

  return (
    <TableContainer>
      <Table>
       <TableHead>
          <TableRow>
            {/* <TableCell>#</TableCell> */}
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Mobile</TableCell>
            <TableCell align="left">FB Msgr</TableCell>
            <TableCell align="left">Text Msg</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {contactMapper()}
          </TableBody>
     </Table>
    </TableContainer>
  );
};
export default ContactTable;
