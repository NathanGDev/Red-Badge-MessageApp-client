import withRoot from '../styling/withRoot';
import React, { useState, useEffect, useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import UserTable from './UserTable';
import NavBar from '../NavBar';
// import APIURL from '../../helpers/environment';


const UserIndex = (props: any) => {
    const [users, setUsers] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState({});

    console.log(props.token)


    const fetchUsers = () => {
        fetch(`http://localhost:3001/user/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((userData) => {
                setUsers(userData)
            })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const editUpdateUser = (user: any) => {
        setUserToUpdate(user);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return (
        <Container>
<<<<<<< HEAD
<<<<<<< HEAD
            <NavBar />
=======
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
=======
            <NavBar />
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
            <UserCreate fetchUsers={fetchUsers} token={props.token}/>
            <UserTable users={users} editUpdateUser={editUpdateUser}
                updateOn={updateOn} fetchUsers={fetchUsers} token={props.token} />
            {updateActive ? <UserEdit userToUpdate={userToUpdate}
                updateOff={updateOff} token={props.token} fetchUsers={fetchUsers} /> : <></>}
        </Container>
    );
};

export default withRoot(UserIndex);
