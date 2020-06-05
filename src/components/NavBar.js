import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Linkk from "@material-ui/core/Link";
import { Link, Route, Switch } from "react-router-dom";
import NavBarStyling from "./styling/NavBarStyling";
import Toolbar, { styles as toolbarStyles } from "./styling/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import UserIndex from "./user/UserIndex";
import ContactIndex from "./contact/ContactIndex";
import UserTypeIndex from "./userType/UserTypeIndex";
import Auth from "./Auth";

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function NavBar(props) {
  const { classes } = props;
  const { clearToken } = props;
  const { userType } = props;
  const { token } = props;
  const { updateToken } = props;
  const { updateUserType } = props;
  const { setSalesPersonId } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [contact, setContact] = useState("");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    clearToken();
  };

  return (
    <div>
      <NavBarStyling>
        <Toolbar className={classes.toolbar}>
          <div className={classes.menuLink}>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon className={classes.menuLink} />
            </IconButton>
            {token ? (
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* {userType != "Assist-send" && userType != "Assist-view" ? (
                  <MenuItem onClick={handleClose}>
                    <Link
                      color="inherit"
                      underline="none"
                      style={{ textDecoration: "none" }}
                      to="/home"
                    >
                      Home
                    </Link>
                  </MenuItem>
                ) : null} */}
                {userType != "Admin" ? (
                  <MenuItem onClick={handleClose}>
                    <Link
                      color="inherit"
                      underline="none"
                      style={{ textDecoration: "none" }}
                      to="/contact"
                    >
                      Contacts
                    </Link>
                  </MenuItem>
                ) : null}
                {userType == "Salesperson" ? (
                  <MenuItem onClick={handleClose}>
                    <Link
                      color="inherit"
                      underline="none"
                      style={{ textDecoration: "none" }}
                      to="/user"
                    >
                      Users
                    </Link>
                  </MenuItem>
                ) : null}
                {userType == "Admin" ? (
                  <MenuItem onClick={handleClose}>
                    <Link
                      color="inherit"
                      underline="none"
                      style={{ textDecoration: "none" }}
                      to="/usertype"
                    >
                      User Types
                    </Link>
                  </MenuItem>
                ) : null}
                <MenuItem onClick={handleLogout}>
                  <Link
                    color="inherit"
                    underline="none"
                    style={{ textDecoration: "none" }}
                  >
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            ) : null}
          </div>

          <Link
            color="inherit"
            variant="h6"
            underline="none"
            style={{ textDecoration: "none" }}
            className={classes.title}
            
          >
            {"MessageMatic"}
          </Link>
        </Toolbar>
      </NavBarStyling>
      <div className="switch">
        {localStorage.getItem("token") ? (
          <Switch>
            <Route path="/home">
              <Home contact={contact} token={token} />
            </Route>
            <Route path="/login">
              <Login token={token} />
            </Route>
            <Route path="/contact">
              <ContactIndex contactSet={setContact} token={token} />
            </Route>
            <Route path="/usertype">
              <UserTypeIndex token={token} />
            </Route>
            <Route path="/user">
              <UserIndex token={token} />
            </Route>
          </Switch>
        ) : (
          <Auth
            updateToken={updateToken}
            updateUserType={updateUserType}
            updateSalesPersonId={setSalesPersonId}
          />
        )}
      </div>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
