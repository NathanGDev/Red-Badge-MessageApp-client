import withRoot from '../styling/withRoot';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Typography from '../styling/Typography';
import AppForm from '../styling/AppForm';
import FormButton from '../styling/FormButton';
import TextField from '@material-ui/core/TextField';
// import APIURL from '../../helpers/environment';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    // width: 200,
    display: 'flex',
    alignItems: 'center',
  },
},
image: {
  height: 55,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
},
}))

interface contactUpdateHelper {
  contactUpdate(event: React.FormEvent<HTMLInputElement>): void;
}

const ContactEdit = (props: any) => {
  const [editFirstName, setEditFirstName] = useState(props.contactToUpdate.firstName);
  const [editLastName, setEditLastName] = useState(props.contactToUpdate.lastName);
  const [editMobileNum, setEditMobileNum] = useState(props.contactToUpdate.mobileNum);
  const [editFbMsgrId, setEditFbMsgrId] = useState(props.contactToUpdate.fbMsgrId);
  const [editSalesUserId, setEditSalesUserId] = useState(props.contactToUpdate.salesUserId);
  const [editId, setEditId] = useState(props.contactToUpdate.id);

  // const handleClose = (event: any, reason: any) => {
  //   if (reason === 'clickaway') {
  //     return;  
  //   }
  // };

  const contactUpdate = (event: any, contact: any) => {
      event?.preventDefault();
    fetch(`http://localhost:3001/contact/${props.contactToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        contact: {
          firstName: editFirstName, lastName: editLastName,
          mobileNum: editMobileNum, fbMsgrId: editFbMsgrId,
          salesUserId: editSalesUserId
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => {
      props.fetchContacts();
      props.updateOff();
    })

  }
  return (
    <Modal isOpen={true}>
      <AppForm>
      {/* <ModalHeader>Edit Contact</ModalHeader> */}
      <ModalBody>
        <form onSubmit={props.contactUpdate}>
          {/* <form> */}
          <Grid container spacing={2}>
                        <Grid item xs>
                            <TextField
                                label="First Name"
                                defaultValue="firstName"
                                onChange={(e: any) => setEditFirstName(e.target.value)}
                                value={editFirstName}
                                fullWidth
                                required={true}
                                name="firstname"
                                margin="normal"
                                variant="outlined"
                                rowsMax={2}
                            ></TextField>
                        </Grid>

                        <Grid item xs>
                            <TextField
                                label="Last Name"
                                defaultValue="lastName"
                                onChange={(e: any) => setEditLastName(e.target.value)}
                                value={editLastName}
                                fullWidth
                                required={true}
                                name="lastname"
                                margin="normal"
                                variant="outlined"
                                rowsMax={2}
                            ></TextField>
                        </Grid>
                        
                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs>
                            <TextField
                                label="Mobile Number"
                                defaultValue="mobileNum"
                                onChange={(e: any) => setEditMobileNum(e.target.value)}
                                value={editMobileNum}
                                fullWidth
                                required={true}
                                name="mobileNum"
                                margin="normal"
                                variant="outlined"
                                rowsMax={2}
                            ></TextField>
                        </Grid>

                        <Grid item xs>
                            <TextField
                                label="FB Msgr Id"
                                defaultValue="fbMsgrId"
                                onChange={(e: any) => setEditFbMsgrId(e.target.value)}
                                value={editFbMsgrId}
                                fullWidth
                                required={true}
                                name="fbMsgrId"
                                margin="normal"
                                variant="outlined"
                                rowsMax={2}
                            ></TextField>
                        </Grid>

                    </Grid>
                    <Grid container spacing={10}>
                    <Grid item xs>
                    <FormButton type="submit" color="secondary">Update Contact</FormButton>
                    </Grid>
                    </Grid>
                </form>
          {/* <Button type="submit" align="center" onClick={handleClose}>Cancel</Button> */}
      </ModalBody>
      </AppForm>
    </Modal>
  );
};

export default withRoot(ContactEdit);
