import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Auth from "./Auth";
import Login from "./Login";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    loginButton: {},
  })
);

export default function ButtonAppBar(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MessageMatic
          </Typography>
          <List>
            <ListItem button>
              <Link to="/home">Home</Link>
            </ListItem>
            <Button color="inherit">
              <Link to="/login">Login</Link>
            </Button>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
