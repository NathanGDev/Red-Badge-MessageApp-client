import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import AppForm from '../styling/AppForm';

// import {Table, Button} from 'reactstrap';
// import APIURL from '../../helpers/environment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(firstName: string, lastName: string, mobileNum: string, fbMsgrId: string) {
  return { firstName, lastName, mobileNum, fbMsgrId};
}

const ContactTable = (props: any) => {

  const deleteContact = (contact: any) => { 
    fetch(`http://localhost:3001/contact/${contact.id}`, { 
        method: 'DELETE',
        headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token 
        })
    })
    .then(() => props.fetchContacts()) 
}

const contactMapper = () => {
    return props.contacts.map((contact: any, index: any) => { 
        return(
          // <TableContainer component={Paper}>
            <Table>
            <TableHead>
          <TableRow key={index}>
          <TableCell>{contact.id}</TableCell>
          <TableCell>{contact.firstName}</TableCell>
          <TableCell>{contact.lastName}</TableCell>
          <TableCell>{contact.mobileNum}</TableCell>
          <TableCell>{contact.fbMsgrId}</TableCell>
            <Button onClick={() => {props.editUpdateContact(contact); props.updateOn()}}><UpdateIcon /></Button> 
            <Button onClick={() => {deleteContact(contact)}}><DeleteIcon /></Button>
      </TableRow>
      </TableHead>
      </Table>
      // </TableContainer>
        )
    })
}

  return (
    <AppForm>
    <TableRow>
    <h3>Contact</h3>
    <hr/>
    <Table>
        <TableHead>
            <TableRow>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile</th>
                <th>FB Msgr</th>
            </TableRow>
        </TableHead>
        <tbody>
            {contactMapper()}
        </tbody>
    </Table>
    </TableRow>
    </AppForm>
  );
};
export default ContactTable;

