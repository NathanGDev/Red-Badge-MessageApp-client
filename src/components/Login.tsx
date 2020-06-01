<<<<<<< HEAD
import React, { useState } from "react";
import Signup from "./Signup";

const Login = (props: any) => {
  const [email, setEmail] = React.useState<any>({
    email: null,
    password: null,
  });
  const [password, setPassword] = React.useState<any>("");

  let handleSubmit = (event: any) => {
    event?.preventDefault();
    fetch(`http://localhost:1337/signin`, {
=======
import withRoot from '././styling/withRoot';
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '././styling/Typography';
import AppForm from '././styling/AppForm';
import FormButton from '././styling/FormButton';
import TextField from '@material-ui/core/TextField';
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
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
  //   width: 200,
    display: 'flex',
    alignItems: 'center',
  },
},
}))

const Login = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (event: any) => {
    event?.preventDefault();
    fetch(`http://localhost:3001/signin`, {
>>>>>>> 83f0c73ebe846df710d70ee4e6cbaa1260d218e4
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
      .then((data: any) => {
        props.updateToken(data.sessionToken);
        console.log(data);
      });
  };
<<<<<<< HEAD

  // Unused function for the time being

  // function IsRememberMe() {
  //   if (rmCheck.checked && userInput.value !== "") {
  //     localStorage.username = userInput.value;
  //     localStorage.checkbox = rmCheck.value;
  //   } else {
  //     localStorage.username = "";
  //     localStorage.checkbox = "";
  //   }
  // }
  let needAccount = () => {
    return <Signup />;
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Remember Me </label>
          <input type="checkbox" value="IsRememberMe" id="rememberMe" />
        </div>
        <button type="submit" value="login" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <div onClick={needAccount}>need an account?</div>
      <a href="/signup">Need to create an account?</a>
    </div>
  );
};

export default Login;
=======

  // Unused function for the time being

  // function IsRememberMe() {
  //   if (rmCheck.checked && userInput.value !== "") {
  //     localStorage.username = userInput.value;
  //     localStorage.checkbox = rmCheck.value;
  //   } else {
  //     localStorage.username = "";
  //     localStorage.checkbox = "";
  //   }
  // }
  let needAccount = () => {
    return <Signup />;
  };

  return (
    <React.Fragment>
      <AppForm>

        <React.Fragment>
          <Typography variant="h3">Log In</Typography>
        </React.Fragment>

          <form onSubmit={handleSubmit}>

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
        {/* <div>
          <label>Remember Me </label>
          <input type="checkbox" value="IsRememberMe" id="rememberMe" />
        </div> */}
        <FormButton type="submit" color="secondary" value="login" fullWidth onClick={handleSubmit}>
          Login
        </FormButton>
      {/* <div onClick={needAccount}>need an account?</div> */}
      <div><a href="/signup">Need to create an account?</a></div>
      </form>
     </AppForm>
     </React.Fragment>
  );
};

export default withRoot(Login);
>>>>>>> 83f0c73ebe846df710d70ee4e6cbaa1260d218e4
