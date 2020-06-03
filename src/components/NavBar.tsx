import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import NavBarStyling from '././styling/NavBarStyling';
import Toolbar, { styles as toolbarStyles } from '././styling/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

// import APIURL from '../../../../helpers/environment';

const styles = (theme: any) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
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

interface clearTokenHelper {
  clearToken: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

function NavBar(props: any) {
  const { classes } = props;
  // const { clearToken } = props;

  // const [contacts, setContacts] = useState([]);
  // const [users, setContacts] = useState([]);
  // const [contacts, setContacts] = useState([]);


  const [anchorEl, setAnchorEl] = React.useState(null);
//   const [sessionToken, setSessionToken] = useState('');
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleLogOut = () => {
  //   clearToken();
  // };

  return (
    <div>
      
      <NavBarStyling>
      <Toolbar className={classes.toolbar}>
      <div className={classes.menuLink}>

      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.menuLink}/>
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        <MenuItem onClick={handleClose}>
            <Link
            color="inherit"
            underline="none"
            style={{ textDecoration: 'none' }}
            // href=""
            >
            Profile
            </Link>
        </MenuItem>
        
        {/* {this.state.contacts ?  */}
        <MenuItem onClick={handleClose}>
            <Link
            color="inherit"
            underline="none"
            style={{ textDecoration: 'none' }}
            // href=""
            >
            Contacts
            </Link>
        </MenuItem>
        {/* : null } */}

        {/* {this.state.users ? */}
        <MenuItem onClick={handleClose}>
            <Link
            color="inherit"
            underline="none"
            style={{ textDecoration: 'none' }}
            // href=""
            >
            Users
            </Link>
        </MenuItem>
        {/* : null } */}


        {/* {this.state.userstypes ? */}
        <MenuItem onClick={handleClose}>
            <Link
            color="inherit"
            underline="none"
            style={{ textDecoration: 'none' }}
            // href=""
            >
            User Types
            </Link>
        </MenuItem>
        {/* : null } */}

        {/* <MenuItem onClick={handleLogOut}> */}
        <MenuItem>
            <Link
            color="inherit"
            underline="none"
            style={{ textDecoration: 'none' }}
            // href=""
            >
            Logout
            </Link>
        </MenuItem>
        </Menu>
      </div>
          {/* <div className={classes.left} /> */}
        
            <Link
            color="inherit"
            variant="h6"
            underline="none"
            style={{ textDecoration: 'none' }}
            className={classes.title}
            // href=""
          >
            {'MessageMatic'}
          </Link>
          {/* <div className={classes.right}> */}
            <Link
              // color="inherit"
              // variant="h6"
              // underline="none"
              // style={{ textDecoration: 'none' }}
              // className={classes.rightLink}
              // href="http://localhost:3003/user/login"
            >
            </Link>            
        </Toolbar>
      </NavBarStyling>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);