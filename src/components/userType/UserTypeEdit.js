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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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

const UserTypeEdit = (props) => {
  const [editUserType, setEditUserType] = useState(props.userTypeToUpdate.userType);
  const [editDescription, setEditDescription] = useState(props.userTypeToUpdate.description);
  const [editActive, setEditActive] = useState(props.userTypeToUpdate.active);
  const [editSalesUserId, setEditSalesUserId] = useState(props.userTypeToUpdate.salesUserId);
  const [editId, setEditId] = useState(props.userTypeToUpdate.id);

  const [open, setOpen] = useState(true);

  const [checked, setChecked] = React.useState(true);
    const [state, setState] = React.useState({
        checked: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  const userTypeUpdate = (event, userType) => {
    event.preventDefault();
    fetch(`http://localhost:3000/usertype/${props.userTypeToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        usertype: {
          userType: editUserType,
          description: editDescription,
          active: editActive,
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token.sessionToken
      })
    }).then((res) => {
      props.fetchUserTypes();
      props.updateOff();
    })

  }
  return (
    <div>
         <Dialog open={open} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Edit User Type</DialogTitle>
    <DialogContent>
        <AppForm>
          <form onSubmit={userTypeUpdate}>
            {" "}
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  label="User Type"
                  defaultValue="userType"
                  onChange={(e) => setEditUserType(e.target.value)}
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
                  onChange={(e) => setEditDescription(e.target.value)}
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

            <Grid container spacing={10} alignItems="center">
                        <Grid item xs>
                                
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={state.checked}
                                            onChange={(e) => setEditActive(e.target.value)}
                                            onChange={handleChange}
                                            name="active"
                                            color="primary"
                                            value={editActive}
                                            align="center"
                                        />
                                    }
                                    label="Active"
                                />
                                </FormGroup>
                {/* <TextField
                  label="Active"
                  defaultValue="active"
                  onChange={(e) => setEditActive(e.target.value)}
                  value={editActive}
                  fullWidth
                  required={true}
                  name="active"
                  margin="normal"
                  variant="outlined"
                  rowsMax={2}
                ></TextField> */}
              </Grid>
            </Grid>

                <FormButton type="submit" color="secondary" align="center" fullWidth>
                  Update User Type
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

export default withRoot(UserTypeEdit);
