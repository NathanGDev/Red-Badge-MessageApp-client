import React, { useState, useEffect, useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserTypeCreate from './UserTypeCreate';
import UserTypeEdit from './UserTypeEdit';
import UserTypeTable from './UserTypeTable';
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
            <UserTypeCreate fetchUsers={fetchUsers} token={props.token}/>
            <UserTypeTable users={users} editUpdateUser={editUpdateUser}
                updateOn={updateOn} fetchUsers={fetchUsers} token={props.token} />
            {updateActive ? <UserTypeEdit userToUpdate={userToUpdate}
                updateOff={updateOff} token={props.token} fetchUsers={fetchUsers} /> : <></>}
        </Container>
    );
};

export default UserIndex;