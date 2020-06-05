import withRoot from "../styling/withRoot";
import React, { useState, useEffect, useReducer } from "react";
import { Container, Row, Col } from "reactstrap";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserTable from "./UserTable";
// import APIURL from '../../helpers/environment';


const UserIndex = (props) => {
    const [users, setUsers] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState({});

    const { userSet } = props;

    console.log(props.token)

    const fetchUsers = () => {
        fetch(`http://localhost:3000/user/`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: props.token.sessionToken
            })
        })
            .then((res) => res.json())
            .then((userData) => {
                setUsers(userData)
                console.log("!!!!!!!!!!" + userData)
            });
    };

    useEffect(() => {
        fetchUsers();
    }, [])

    const editUpdateUser = (user) => {
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
      <UserCreate fetchUsers={fetchUsers} token={props.token} />
      <UserTable
        userSet={userSet}
        users={users}
        editUpdateUser={editUpdateUser}
        updateOn={updateOn}
        fetchUsers={fetchUsers}
        token={props.token.sessionToken}
      />
      {updateActive ? (
        <UserEdit
          userToUpdate={userToUpdate}
          updateOff={updateOff}
          token={props.token}
          fetchUsers={fetchUsers}
        />
      ) : (
        <></>
      )}
    </Container>
    );
};

export default withRoot(UserIndex);
