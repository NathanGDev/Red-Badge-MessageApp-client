import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';

const UserTable = (props: any) => {
    
    const deleteUser = (user: any) => { 
        fetch(`http://localhost:3001/user/${user.id}`, { 
            method: 'DELETE',
            headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token 
            })
        })
        .then(() => props.fetchUsers()) 
    }
    console.log(props)

    const userMapper = () => {
        return props.users.map((user: any, index: any) => { 
            return(
                <tr key={index}>
                    <th scope="row">{user.id}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.mobileNum}</td>
                    <td>{user.fbMsgrId}</td>
                    <td>{user.password}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateUser(user); props.updateOn()}}>Update</Button> 
                        <Button color="danger" onClick={() => {deleteUser(user)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Users</h3>
        <hr/>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>FB Msgr</th>
                </tr>
            </thead>
            <tbody>
                {userMapper()}
            </tbody>
        </Table>
        </>
    );
};

export default UserTable;