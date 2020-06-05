import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { Link } from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import SmsIcon from "@material-ui/icons/Sms";
import Tooltip from '@material-ui/core/Tooltip';
// import APIURL from '../../helpers/environment';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  tableCell: {
   maxWidth: 50, 
  },
});

const UserTable = (props) => {
  const { userSet } = props;
  const classes = useStyles();

  const deleteUser = (user) => { 
    fetch(`http://localhost:3000/user/${user.id}`, { 
        method: 'DELETE',
        headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token, 
        }),
    }).then(() => props.fetchUsers()) 
};

const userMapper = () => {
  console.log(JSON.stringify(props.users))
    return props.users.map((user, index) => { 
        return(
          <TableRow key={user.id}>
          <TableCell align="left">{user.firstName}</TableCell>
          <TableCell align="left">{user.lastName}</TableCell>
          <TableCell align="left">{user.mobileNum}</TableCell>
          <TableCell align="left">{user.fbMsgrId}</TableCell>
          <TableCell align="left">{user.email}</TableCell>
          <TableCell align="left">{user.userType.userType}</TableCell>

          <TableCell align="left">
              <Tooltip title="Edit">
              <Button
                onClick={() => {
                  props.editUpdateUser(user);
                  props.updateOn();
                }}
              >
                <UpdateIcon />
              </Button>
              </Tooltip>
              </TableCell>

              <TableCell align="left">
              <Tooltip title="Delete">
              <Button
                onClick={() => {
                  deleteUser(user);
                }}
              >
                <DeleteIcon />
              </Button>
              </Tooltip>
              </TableCell>
            </TableRow>
        )
    })
}

  return (
    <TableContainer>
      <Table>
       <TableHead>
          <TableRow>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Mobile</TableCell>
            <TableCell align="left">FB Msgr</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">User Type</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userMapper()}
          </TableBody>
     </Table>
    </TableContainer>
  );
};
export default UserTable;

