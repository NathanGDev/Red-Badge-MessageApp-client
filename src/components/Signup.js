// import withRoot from '././styling/withRoot';
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import Typography from "./styling/Typography";
import AppForm from "./styling/AppForm";
import FormButton from "./styling/FormButton";
import TextField from "@material-ui/core/TextField";
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
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      //   width: 200,
      display: "flex",
      alignItems: "center",
    },
  },
}));
const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNum, setMobileNum] = useState("");

  const { updateToken } = props;
  const { updateSalesPersonId } = props;
  const { toggle } = props;
  const { updateUserType } = props;

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/signin/create`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          mobileNum: mobileNum,
          userTypeId: 1,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateToken(data.sessionToken);
        console.log("==================" + JSON.stringify(data));
        
        updateUserType("Salesperson");

        fetch(`http://localhost:3000/user/ ${data.user.id}`, {
          method: "PUT",
          body: JSON.stringify({
            user: {
              email: data.user.email,
              firstName: data.user.firstName,
              lastName: data.user.lastName,
              mobileNum: data.user.mobileNum,
              userTypeId: 1,
              fbMsgrId: data.user.fbMsgrId,
              salesUserId: data.user.id,
            },
          }),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: data.sessionToken,
          }),
        })
          .then((response2) => response2.json())
          .then((data2) => {
            console.log(JSON.stringify(data2));
          });
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
            onChange={(e) => setFirstName(e.target.value)}
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
            onChange={(e) => setLastName(e.target.value)}
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
            onChange={(e) => setMobileNum(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            fullWidth
            required={true}
            name="password"
            margin="normal"
            variant="outlined"
            rowsMax={2}
          ></TextField>
          <FormButton type="submit" color="secondary">
            Sign Up
          </FormButton>
          {/* <div>
            <a href="/login">Already have an account?</a>
          </div> */}
          <div>
            <Link href="/signin" onClick={toggle}>
              Already have an account?
            </Link>
          </div>
        </form>
      </AppForm>
    </React.Fragment>
  );
};
export default Signup;
