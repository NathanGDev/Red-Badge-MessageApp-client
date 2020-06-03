import withRoot from '././styling/withRoot';
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '././styling/Typography';
import AppForm from '././styling/AppForm';
import FormButton from '././styling/FormButton';
import TextField from '@material-ui/core/TextField';
// import APIURL from "../helpers/environment";

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
  //   width: 200,
    display: 'flex',
    alignItems: 'center',
  },
},
}))

const Signup = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNum, setMobileNum] = useState("");

  let handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3001/signin/create`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          mobileNum: mobileNum,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <React.Fragment>
      <AppForm>

        <React.Fragment>
          <Typography variant="h3">Sign Up</Typography>
        </React.Fragment>

          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              defaultValue="firstName"
              onChange={(e: any) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required={true}
              name="firstname"
              margin="normal"
              variant="outlined"
              rowsMax={2}
            ></TextField>
            <TextField
              label="Last Name"
              defaultValue="lastName"
              onChange={(e: any) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required={true}
              name="lastname"
              margin="normal"
              variant="outlined"
              rowsMax={2}
            ></TextField>
            <TextField
              label="Mobile Number"
              defaultValue="mobileNum"
              onChange={(e: any) => setMobileNum(e.target.value)}
              value={mobileNum}
              fullWidth
              required={true}
              name="mobileNum"
              margin="normal"
              variant="outlined"
              rowsMax={2}
            ></TextField>
            <TextField
              label="Email"
              defaultValue="email"
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required={true}
              name="email"
              margin="normal"
              variant="outlined"
              rowsMax={2}
            ></TextField>
            <TextField
              label="Password"
              defaultValue="password"
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
              value={password}
              fullWidth
              required={true}
              name="password"
              margin="normal"
              variant="outlined"
              rowsMax={2}
            ></TextField>
            <FormButton type="submit" color="secondary">Sign Up</FormButton>
            <div><a href="/login">Already have an account?</a></div>
          </form>
      </AppForm>
    </React.Fragment>
  );
};

export default withRoot(Signup);
