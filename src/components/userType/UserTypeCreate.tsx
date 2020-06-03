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

const UserTypeCreate = (props: any) => {
    const classes = useStyles();
    const [userType, setUserType] = useState("");
    const [description, setDescription] = useState("");
    const [active, setActive] = useState(true);
    // const [userId, setUserId] = useState("");

    console.log(props)

    let handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3001/usertype`, {
            method: "POST",
            body: JSON.stringify({
                userType: {
                    userType: userType,
                    description: description,
                    active: active,
                    // salesUserId: userId
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': props.token
            }),
        }).then((response) => response.json())
            .then((userTypeData) => {
                console.log(userTypeData);
                setUserType('');
                setDescription('');
                setActive(true);
                // setUserId('');
                props.fetchUserTypes();
            });
    };

    return (
        <React.Fragment>
            <AppForm>

                <React.Fragment>
                    <Typography variant="h5">Add User Type</Typography>
                </React.Fragment>

                <form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
                        <Grid item xs>
                            <TextField
                                label="User Type"
                                defaultValue="userType"
                                onChange={(e: any) => setUserType(e.target.value)}
                                value={userType}
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
                                onChange={(e: any) => setDescription(e.target.value)}
                                value={description}
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
                                onChange={(e: any) => setActive(e.target.value)}
                                value={active}
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
                    <FormButton type="submit" color="secondary" align="center">Add User Type</FormButton>
                    </Grid>
                    </Grid>
                </form>
            </AppForm>
        </React.Fragment>
    );
};

export default withRoot(UserTypeCreate);
