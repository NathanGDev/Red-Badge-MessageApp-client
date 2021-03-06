import withRoot from '././styling/withRoot';
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import Typography from "./styling/Typography";
import AppForm from "./styling/AppForm";
import FormButton from "./styling/FormButton";
import TextField from "@material-ui/core/TextField";
import Signup from "./Signup";
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
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateToken } = props;
  const { updateUserType } = props;
  const { toggle } = props;

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/signin`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateToken(data.sessionToken);
        console.log("!!!!!!!!!!!!!!!!!!!!  " + JSON.stringify(data));
        console.log(
          "~~~~~~~~~~~~~~~~" + JSON.stringify(data.user.userType.userType)
        );
        updateUserType(data.user.userType.userType);
      });
  };

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h5" align="center">Log In</Typography>
        </React.Fragment>
        <form onSubmit={handleSubmit} align="center">
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
          {/* <div>
          <label>Remember Me </label>
          <input type="checkbox" value="IsRememberMe" id="rememberMe" />
        </div> */}
          <FormButton
            type="submit"
            color="secondary"
            value="login"
            // fullWidth
            alignItems="center"
            onClick={handleSubmit}
          >
            Login
          </FormButton>
          {/* <div onClick={needAccount}>need an account?</div> */}
          <div>
            <Link href="/signup" alignItems="center" onClick={toggle}>
              Need to create an account?
            </Link>
            {/* <a href="/signup">Need to create an account?</a> */}
          </div>
        </form>
      </AppForm>
    </React.Fragment>
  );
};
export default withRoot(Login);