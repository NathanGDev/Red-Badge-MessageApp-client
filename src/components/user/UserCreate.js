import withRoot from '../styling/withRoot';
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../styling/Typography';
import AppForm from '../styling/AppForm';
import FormButton from '../styling/FormButton';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
            textAlign: 'center'
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}))

const UserCreate = (props) => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNum, setMobileNum] = useState("");
    const [fbMsgrId, setFbMsgrId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    // const [userTypeId, setUserTypeId] = useState("");

    // const handleChange = (event) => {
    //     setUserType(event.target.value);
    //   };

    console.log(props)

    let handleSubmit = (event) => {
        event.preventDefault();
        if (userType == 'Admin-view') {
            var enteredUserTypeId = 4
        } else {var enteredUserTypeId = 3}
        console.log("!!!!!!!!!! " + enteredUserTypeId)
        fetch(`http://localhost:3000/user`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    firstName: firstName,
                    lastName: lastName,
                    mobileNum: mobileNum,
                    fbMsgrId: fbMsgrId,
                    email: email,
                    password: password,
                    userTypeId: enteredUserTypeId,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: props.token.sessionToken,
            }),
        })
            .then((response) => response.json())
            .then((userData) => {
                console.log(userData);
                setFirstName('');
                setLastName('');
                setMobileNum('');
                setFbMsgrId('');
                setEmail('');
                setPassword('');
                setUserType('');
                props.fetchUsers();
            });
    };

    return (
        <React.Fragment>
            <AppForm>
                <React.Fragment>
                    <Typography variant="h5">Add User</Typography>
                </React.Fragment>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs>
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
                        </Grid>

                        <Grid item xs>
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
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs>
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
                        </Grid>

                        <Grid item xs>
                            <TextField
                                label="FB Msgr Id"
                                defaultValue="fbMsgrId"
                                onChange={(e) => setFbMsgrId(e.target.value)}
                                value={fbMsgrId}
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
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
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
                                // defaultValue="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
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
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                label="User Type"
                                required={true}
                            >
                                <option value={'Assist-view'}>Assist-view</option>
                                <option value={'Assist-send'}>Assist-send</option>
                            </Select>
                    </Grid>
                </Grid>



                    <Grid container spacing={10} align="center">
                        <Grid item xs>
                            <FormButton type="submit" color="secondary">
                                Add User
                        </FormButton>
                        </Grid>
                    </Grid>
                </form>
            </AppForm>
        </React.Fragment>
    );
};

export default withRoot(UserCreate);
