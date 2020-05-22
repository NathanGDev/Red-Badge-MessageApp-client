import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import APIURL from '../helpers/environment';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function SignUp(props) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameHelperText, setFirstNameHelperText] = useState('');
  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameHelperText, setLastNameHelperText] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');
  // Handle the form submit
  let handleSubmit = (event) => {
    event.preventDefault();
    var validationError = false;
    // Validate First Name - At least 2 characters with no spaces.
    let nameRegEx = /^(?=.{2,50}$)[a-zA-Z]*$/;
    if (!nameRegEx.test(firstName)) {
        validationError = true;
        setFirstNameError(true);
        setFirstNameHelperText('Invalid First Name');
    } else {
        setFirstNameError(false);
        setFirstNameHelperText('');
    }
    // Validate Last Name - At least 2 characters.
    if (!nameRegEx.test(lastName)) {
        validationError = true;
        setLastNameError(true);
        setLastNameHelperText('Invalid Last Name');
    } else {
        setLastNameError(false);
        setLastNameHelperText('');
    }
    // Validate Email Address
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegEx.test(email)) {
        validationError = true;
        setEmailError(true);
        setEmailHelperText('Invalid Email Address');
    } else {
        setEmailError(false);
        setEmailHelperText('');
    }
    // Validate Password - At least 5 characters
      if (password.length < 5) {
        validationError = true;
        setPasswordError(true);
        setPasswordHelperText('Password must be at least 5 characters');
    } else {
        setPasswordError(false);
        setPasswordHelperText('');
    }
    // If there were no errors, then create the User
    if (!validationError) {
        console.log('Made it inside if to do the fetch.');
        fetch("http://localhost:3000/user/createuser", {
        // fetch(`${APIURL}/user/create`, {
            method: 'POST',
            body: JSON.stringify({user:
                {firstName: firstName, lastName: lastName, 
                email: email, passwordHash: password, 
                }}),
            headers: new Headers({
            'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={firstNameError}
                helperText={firstNameHelperText}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                error={lastNameError}
                helperText={lastNameHelperText}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={emailError}
                helperText={emailHelperText}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError}
                helperText={passwordHelperText}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" onClick={props.updateSignUpIn} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}