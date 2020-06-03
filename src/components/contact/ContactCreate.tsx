import withRoot from '../styling/withRoot';
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Typography from '../styling/Typography';
import AppForm from '../styling/AppForm';
import FormButton from '../styling/FormButton';
import TextField from '@material-ui/core/TextField';
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";
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
}))

const ContactCreate = (props: any) => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNum, setMobileNum] = useState("");
    const [fbMsgrId, setFbMsgrId] = useState("");
    // const [userId, setUserId] = useState("");

    console.log(props)

    let handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3001/contact`, {
            method: "POST",
            body: JSON.stringify({
                contact: {
                    firstName: firstName,
                    lastName: lastName,
                    mobileNum: mobileNum,
                    fbMsgrId: fbMsgrId,
                    // salesUserId: userId
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': props.token
            }),
        }).then((response) => response.json())
            .then((contactData) => {
                console.log(contactData);
                setFirstName('');
                setLastName('');
                setMobileNum('');
                setFbMsgrId('');
                // setUserId('');
                props.fetchContacts();
            });
    };

    return (
        <React.Fragment>
            <AppForm>

                <React.Fragment>
                    <Typography variant="h5">Add Contact</Typography>
                </React.Fragment>

                <form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
                        <Grid item xs>
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
                        </Grid>

                        <Grid item xs>
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
                        </Grid>
                        
                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs>
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
                        </Grid>

                        <Grid item xs>
                            <TextField
                                label="FB Msgr Id"
                                defaultValue="fbMsgrId"
                                onChange={(e: any) => setFbMsgrId(e.target.value)}
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
                    <Grid container spacing={10}>
                    <Grid item xs>
                    <FormButton type="submit" color="secondary">Add Contact</FormButton>
                    </Grid>
                    </Grid>
                </form>
            </AppForm>
        </React.Fragment>
    );
};

export default withRoot(ContactCreate);
