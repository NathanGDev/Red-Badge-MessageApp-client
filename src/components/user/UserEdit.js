import withRoot from "../styling/withRoot";
import React, { useState } from "react";
// import { Modal, ModalBody } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppForm from "../styling/AppForm";
import FormButton from "../styling/FormButton";
import TextField from "@material-ui/core/TextField";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

const UserEdit = (props) => {
  const [editFirstName, setEditFirstName] = useState(props.userToUpdate.firstName);
  const [editLastName, setEditLastName] = useState(props.userToUpdate.lastName);
  const [editMobileNum, setEditMobileNum] = useState(props.userToUpdate.mobileNum);
  const [editFbMsgrId, setEditFbMsgrId] = useState(props.userToUpdate.fbMsgrId);
  const [editEmail, setEditEmail] = useState(props.userToUpdate.email);
  const [editPassword, setEditPassword] = useState(props.userToUpdate.password);
  const [editUserType, setEditUserType] = useState(props.userToUpdate.userType);
  const [editSalesUserId, setEditSalesUserId] = useState(props.userToUpdate.salesUserId);
  const [editId, setEditId] = useState(props.userToUpdate.id);

  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  const userUpdate = (event, user) => {
    event.preventDefault();
    if (editUserType == 'Admin-view') {
      var enteredUserTypeId = 4
  } else {var enteredUserTypeId = 3}
    fetch(`http://localhost:3000/user/${props.userToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        user: {
          firstName: editFirstName, lastName: editLastName,
          mobileNum: editMobileNum, fbMsgrId: editFbMsgrId,
          email: editEmail, password: editPassword,
          salesUserId: editSalesUserId,
          userTypeId: enteredUserTypeId,

        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token.sessionToken,
      })
    }).then((res) => {
      props.fetchUsers();
      props.updateOff();
    });
  };
  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
        <DialogContent>
          <AppForm>
            <form onSubmit={userUpdate}>
              {" "}
              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    label="First Name"
                    defaultValue="firstName"
                    onChange={(e) => setEditFirstName(e.target.value)}
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
                    onChange={(e) => setEditLastName(e.target.value)}
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
                    onChange={(e) => setEditMobileNum(e.target.value)}
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
                    onChange={(e) => setEditFbMsgrId(e.target.value)}
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

              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    label="Email"
                    defaultValue="email"
                    onChange={(e) => setEditEmail(e.target.value)}
                    value={editEmail}
                    fullWidth
                    required={true}
                    name="email"
                    margin="normal"
                    variant="outlined"
                    rowsMax={2}
                  ></TextField>
                </Grid>

                <Grid item xs>
                  <TextField
                    label="Password"
                    defaultValue="password"
                    onChange={(e) => setEditPassword(e.target.value)}
                    value={editPassword}
                    fullWidth
                    required={true}
                    name="password"
                    margin="normal"
                    variant="outlined"
                    rowsMax={2}
                    type="password"
                  ></TextField>
                </Grid>
              </Grid>

                <Grid container spacing={2} align="center">
                    <Grid item xs>
                            <InputLabel id="userType">
                                User Type
                            </InputLabel>
                            <Select
                                name="userType"
                                variant="outlined"
                                type="text"
                                labelId="userType"
                                id="userType"
                                value={editUserType}
                                onChange={(e) => setEditUserType(e.target.value)}
                                label="User Type"
                                required={true}
                            >
                                <option value={'Assist-view'}>Assist-view</option>
                                <option value={'Assist-send'}>Assist-send</option>
                            </Select>
                    </Grid>
                </Grid>

              <FormButton type="submit" color="secondary" align="center" fullWidth>
                Update User
                </FormButton>

              <Typography variant="body2" align="center">
                <Button type="submit" align="center" onClick={handleClose}>Cancel</Button>
              </Typography>

            </form>
          </AppForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withRoot(UserEdit);
