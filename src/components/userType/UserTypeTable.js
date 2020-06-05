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

const UserTypeTable = (props) => {

  const { userTypeSet } = props;
  const classes = useStyles();

  const deleteUserType = (userType) => { 
    fetch(`http://localhost:3000/usertype/${userType.id}`, { 
        method: 'DELETE',
        headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token, 
        }),
    }).then(() => props.fetchUserTypes()) 
}

const userTypeMapper = () => {
    return props.userTypes.map((usertype, index) => { 
        return(
          <TableRow key={usertype.id}>
          <TableCell align="left">{usertype.userType}</TableCell>
          <TableCell align="left">{usertype.description}</TableCell>
          {usertype.active ?
            <TableCell align="left">Yes</TableCell>
          : <TableCell align="left">No</TableCell>
          }
           <TableCell align="left">
              <Tooltip title="Edit">
              <Button
                onClick={() => {
                  props.editUpdateUserType(usertype);
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
                  deleteUserType(usertype);
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
          <TableCell align="left">User Type</TableCell>
          <TableCell align="left">Description</TableCell>
          <TableCell align="left">Active</TableCell>
          <TableCell align="left">Edit</TableCell>
          <TableCell align="left">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userTypeMapper()}
        </TableBody>
   </Table>
  </TableContainer>
  );
};
export default UserTypeTable;

