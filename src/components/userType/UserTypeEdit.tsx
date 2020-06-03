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

interface userTypeUpdateHelper {
  userTypeUpdate(event: React.FormEvent<HTMLInputElement>): void;
}

const UserTypeEdit = (props: any) => {
  const [editUserType, setEditUserType] = useState(props.userTypeToUpdate.userType);
  const [editDescription, setEditDescription] = useState(props.userTypeToUpdate.description);
  const [editActive, setEditActive] = useState(props.userTypeToUpdate.active);
  const [editSalesUserId, setEditSalesUserId] = useState(props.userTypeToUpdate.salesUserId);
  const [editId, setEditId] = useState(props.userTypeToUpdate.id);

  // const handleClose = (event: any, reason: any) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  // };

  const userTypeUpdate = (event: any, userType: any) => {
    event.preventDefault();
    fetch(`http://localhost:3001/usertype/${props.userTypeToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        userType: {
          userType: editUserType, description: editDescription,
          active: editActive,
          salesUserId: editSalesUserId
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => {
      props.fetchUserTypes();
      props.updateOff();
    })

  }
  return (
    <Modal isOpen={true}>
      <AppForm>
        {/* <ModalHeader>Edit User</ModalHeader> */}
        <ModalBody>
          <form onSubmit={props.userTypeUpdate}> {/*changed onSubmit type in index.d.ts to any*/}
            {/* <form> */}
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  label="User Type"
                  defaultValue="userType"
                  onChange={(e: any) => setEditUserType(e.target.value)}
                  value={editUserType}
                  fullWidth
                  required={true}
                  name="usertype"
                  margin="normal"
                  variant="outlined"
                  rowsMax={2}
                ></TextField>
              </Grid>

              <Grid item xs>
                <TextField
                  label="Description"
                  defaultValue="description"
                  onChange={(e: any) => setEditDescription(e.target.value)}
                  value={editDescription}
                  fullWidth
                  required={true}
                  name="description"
                  margin="normal"
                  variant="outlined"
                  rowsMax={2}
                ></TextField>
              </Grid>

            </Grid>

            <Grid container spacing={2}>

              <Grid item xs>
                <TextField
                  label="Active"
                  defaultValue="active"
                  onChange={(e: any) => setEditActive(e.target.value)}
                  value={editActive}
                  fullWidth
                  required={true}
                  name="active"
                  margin="normal"
                  variant="outlined"
                  rowsMax={2}
                ></TextField>
              </Grid>

              
            </Grid>

            <Grid container spacing={10}>
              <Grid item xs>
                <FormButton type="submit" color="secondary">Update User Type</FormButton>
              </Grid>
            </Grid>
          </form>
          {/* <Button type="submit" align="center" onClick={handleClose}>Cancel</Button> */}
        </ModalBody>
      </AppForm>
    </Modal>
  );
};

export default withRoot(UserTypeEdit);