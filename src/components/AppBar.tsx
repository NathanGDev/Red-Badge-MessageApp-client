import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';


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
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: { currentTarget: React.SetStateAction<null>; }) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon />
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

                        <MenuItem onClick={handleClose}>
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
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}