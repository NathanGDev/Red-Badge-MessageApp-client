import withRoot from '../styling/withRoot';
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Typography from '../styling/Typography';
import AppForm from '../styling/AppForm';
import FormButton from '../styling/FormButton';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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

const UserTypeCreate = (props) => {
    const classes = useStyles();
    const [userType, setUserType] = useState("");
    const [description, setDescription] = useState("");
    const [active, setActive] = useState(true);
    // const [userId, setUserId] = useState("");

    const [checked, setChecked] = React.useState(true);
    const [state, setState] = React.useState({
        checked: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    console.log(props)

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/usertype`, {
            method: "POST",
            body: JSON.stringify({
                usertype: {
                    userType: userType,
                    description: description,
                    active: active,
                    // salesUserId: userId
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: props.token.sessionToken,
            }),
        })
            .then((response) => response.json())
            .then((userTypeData) => {
                console.log(userTypeData);
                setUserType('');
                setDescription('');
                setActive('');
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
                                onChange={(e) => setUserType(e.target.value)}
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
                                onChange={(e) => setDescription(e.target.value)}
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

                    <Grid container spacing={10} alignItems="center">
                        <Grid item xs>
                                
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={state.checked}
                                            onChange={(e) => setActive(e.target.value)}
                                            onChange={handleChange}
                                            name="active"
                                            color="primary"
                                            value={active}
                                            align="center"
                                        />
                                    }
                                    label="Active"
                                />
                                </FormGroup>

                                {/* <TextField
                                    label="Active"
                                    defaultValue="active"
                                    onChange={(e) => setActive(e.target.value)}
                                    value={active}
                                    fullWidth
                                    required={true}
                                    name="active"
                                    margin="normal"
                                    variant="outlined"
                                    rowsMax={2}
                                ></TextField> */}
                        </Grid>
                        </Grid>

                        <Grid container spacing={10} align="center">
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
