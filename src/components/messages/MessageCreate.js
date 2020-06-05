import withRoot from "../styling/withRoot";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "../styling/Typography";
import AppForm from "../styling/AppForm";
import FormButton from "../styling/FormButton";
import TextField from "@material-ui/core/TextField";
import { Input, FormControl } from "@material-ui/core";
// import APIURL from "../helpers/environment";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(1),
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
      textAlign: "center",
    },
  },
}));

// Admin view user type should have a view user field

const MessageCreate = (props) => {
  const classes = useStyles();

  const { token } = props;
  const { fetchMessages } = props;
  const { mobileNum } = props;
  const { id } = props;

  const [message, setMessage] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/message`, {
      method: "POST",
      body: JSON.stringify({
        message: {
          message: message,
          contactMobileNum: props.contact.mobileNum,
          contactId: props.contact.id,
          sent: true,
          service: "sms",
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then((messageData) => {
        console.log(messageData);
        fetchMessages();
      });
  };

  return (
    <React.Fragment>
      <AppForm>
        {/* <React.Fragment>
          <Typography variant="h5" align="center">
            Send a Message
          </Typography>
        </React.Fragment> */}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                label="type your message"
                defaultValue="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                fullWidth
                required={true}
                name="message"
                margin="normal"
                variant="outlined"
                rowsMax={1}
              />

              <FormButton type="submit" color="secondary">
                Send Message
              </FormButton>
            </Grid>
          </Grid>

          {/* <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                label="updateMessage"
                defaultValue="updateMessage"
                onChange={(e) => setUpdateMessage(e.target.value)}
                value={updateMessage}
                fullWidth
                required={true}
                name="updateMessage"
                margin="normal"
                variant="outlined"
                rowsMax={2}
              ></TextField>
            </Grid>

            <Grid item xs>
              <TextField
                label="Delete Message"
                defaultValue="deleteMessage"
                onChange={(e) => setDeleteMessage(e.target.value)}
                value={deleteMessage}
                fullWidth
                required={true}
                name="deleteMessage"
                margin="normal"
                variant="outlined"
                rowsMax={2}
              ></TextField>
            </Grid>
          </Grid> */}
          {/* <Grid container spacing={10} align="center">
            <Grid item xs></Grid>
          </Grid> */}
        </form>
      </AppForm>
    </React.Fragment>
  );
};

export default withRoot(MessageCreate);
