import withRoot from '../styling/withRoot';
import React, { useState, useEffect, useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserTypeCreate from './UserTypeCreate';
import UserTypeEdit from './UserTypeEdit';
import UserTypeTable from './UserTypeTable';
import NavBar from '../NavBar';
// import APIURL from '../../helpers/environment';


const UserTypeIndex = (props: any) => {
    const [userTypes, setUserTypes] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [userTypeToUpdate, setUserTypeToUpdate] = useState({});

    console.log(props.token)


    const fetchUserTypes = () => {
        fetch(`http://localhost:3001/usertype/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((userTypeData) => {
                setUserTypes(userTypeData)
            })
    }

    useEffect(() => {
        fetchUserTypes();
    }, [])

    const editUpdateUserType = (userType: any) => {
        setUserTypeToUpdate(userType);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return (
        <Container>
            <NavBar />
            <UserTypeCreate fetchUserTypes={fetchUserTypes} token={props.token}/>
            <UserTypeTable userTypes={userTypes} editUpdateUserType={editUpdateUserType}
                updateOn={updateOn} fetchUserTypes={fetchUserTypes} token={props.token} />
            {updateActive ? <UserTypeEdit userTypeToUpdate={userTypeToUpdate}
                updateOff={updateOff} token={props.token} fetchUserTypes={fetchUserTypes} /> : <></>}
        </Container>
    );
};

export default withRoot(UserTypeIndex);
