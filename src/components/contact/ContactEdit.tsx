import withRoot from '../styling/withRoot';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
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

<<<<<<< HEAD
=======
interface contactUpdateHelper {
  contactUpdate(event: React.FormEvent<HTMLInputElement>): void;
}

>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
const ContactEdit = (props: any) => {
  const [editFirstName, setEditFirstName] = useState(props.contactToUpdate.firstName);
  const [editLastName, setEditLastName] = useState(props.contactToUpdate.lastName);
  const [editMobileNum, setEditMobileNum] = useState(props.contactToUpdate.mobileNum);
  const [editFbMsgrId, setEditFbMsgrId] = useState(props.contactToUpdate.fbMsgrId);
  const [editSalesUserId, setEditSalesUserId] = useState(props.contactToUpdate.salesUserId);
<<<<<<< HEAD
=======
// import APIURL from '../../helpers/environment';

const ContactEdit = (props: any) => {
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editMobileNum, setEditMobileNum] = useState("");
  const [editFbMsgrID, setEditFbMsgrID] = useState("");
  const [editSalesUserID, setEditSalesUserID] = useState("");
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
=======
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
  const [editId, setEditId] = useState(props.contactToUpdate.id);

  // const handleClose = (event: any, reason: any) => {
  //   if (reason === 'clickaway') {
<<<<<<< HEAD
  //     return;
=======
  //     return;  
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
  //   }
  // };

  const contactUpdate = (event: any, contact: any) => {
<<<<<<< HEAD
    event.preventDefault();
<<<<<<< HEAD
    fetch(`http://localhost:3001/contact/${props.contactToUpdate.id}`, {
=======
    fetch(`http://localhost:3001/contact/${editId}`, {
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
=======
      event?.preventDefault();
    fetch(`http://localhost:3001/contact/${props.contactToUpdate.id}`, {
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
      method: 'PUT',
      body: JSON.stringify({
        contact: {
          firstName: editFirstName, lastName: editLastName,
<<<<<<< HEAD
<<<<<<< HEAD
          mobileNum: editMobileNum, fbMsgrId: editFbMsgrId,
          salesUserId: editSalesUserId
=======
          mobileNum: editMobileNum, fbMsgrID: editFbMsgrID,
          salesUserID: editSalesUserID
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
=======
          mobileNum: editMobileNum, fbMsgrId: editFbMsgrId,
          salesUserId: editSalesUserId
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
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
<<<<<<< HEAD
<<<<<<< HEAD
      <AppForm>
      {/* <ModalHeader>Edit Contact</ModalHeader> */}
      <ModalBody>
        <form onSubmit={contactUpdate}> {/*changed onSubmit type in index.d.ts to any*/}
=======
      <AppForm>
      {/* <ModalHeader>Edit Contact</ModalHeader> */}
      <ModalBody>
        <form onSubmit={props.contactUpdate}> {/*changed onSubmit type in index.d.ts to any*/}
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
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
<<<<<<< HEAD
=======
      <ModalHeader>Edit Contact</ModalHeader>
      <ModalBody>
        {/* <Form onSubmit={contactUpdate}> */}
          <Form>
          <FormGroup>
            <Input name="first name" value={editFirstName} onChange={(e: any) => setEditFirstName(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Input name="last name" value={editLastName} onChange={(e: any) => setEditLastName(e.target.value)} />
          </FormGroup><FormGroup>
            <Input name="mobile number" value={editMobileNum} onChange={(e: any) => setEditMobileNum(e.target.value)} />
          </FormGroup><FormGroup>
            <Input name="fb msgr id" value={editFbMsgrID} onChange={(e: any) => setEditFbMsgrID(e.target.value)} />
          </FormGroup>
          <Button type="submit" color="secondary" fullWidth>Update contact</Button>
          {/* <Button type="submit" align="center" onClick={handleClose}>Cancel</Button> */}
        </Form>
      </ModalBody>
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
=======
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
    </Modal>
  );
};

export default withRoot(ContactEdit);