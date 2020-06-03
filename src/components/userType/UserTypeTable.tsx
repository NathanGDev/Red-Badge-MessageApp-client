import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import AppForm from '../styling/AppForm';

// import {Table, Button} from 'reactstrap';
// import APIURL from '../../helpers/environment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(firstName: string, lastName: string, mobileNum: string, fbMsgrId: string) {
//   return { firstName, lastName, mobileNum, fbMsgrId};
// }

const UserTypeTable = (props: any) => {

  const deleteUserType = (userType: any) => { 
    fetch(`http://localhost:3001/usertype/${userType.id}`, { 
        method: 'DELETE',
        headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token 
        })
    })
    .then(() => props.fetchUserTypes()) 
}

const userTypeMapper = () => {
    return props.userTypes.map((usertype: any, index: any) => { 
        return(
          // <TableContainer component={Paper}>
            <Table>
            <TableHead>
          <TableRow key={index}>
          <TableCell>{usertype.userType}</TableCell>
          <TableCell>{usertype.desription}</TableCell>
          <TableCell>{usertype.active}</TableCell>
            <Button onClick={() => {props.editUpdateUserType(usertype); props.updateOn()}}><UpdateIcon /></Button> 
            <Button onClick={() => {deleteUserType(usertype)}}><DeleteIcon /></Button>
      </TableRow>
      </TableHead>
      </Table>
      // </TableContainer>
        )
    })
}

  return (
    <AppForm>
    <TableRow>
    <h3>User Type</h3>
    <hr/>
    <Table>
        <TableHead>
            <TableRow>
                <th>#</th>
                <th>User Type</th>
                <th>Description</th>
                <th>Active</th>
            </TableRow>
        </TableHead>
        <tbody>
            {userTypeMapper()}
        </tbody>
    </Table>
    </TableRow>
    </AppForm>
  );
};
export default UserTypeTable;

