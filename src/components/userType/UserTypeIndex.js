import withRoot from '../styling/withRoot';
import React, { useState, useEffect, useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserTypeCreate from './UserTypeCreate';
import UserTypeEdit from './UserTypeEdit';
import UserTypeTable from './UserTypeTable';
// import APIURL from '../../helpers/environment';


const UserTypeIndex = (props) => {
    const [userTypes, setUserTypes] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [userTypeToUpdate, setUserTypeToUpdate] = useState({});

    const { userTypeSet } = props;

    const fetchUserTypes = () => {
        fetch(`http://localhost:3000/usertype/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: props.token.sessionToken
            })
        })
            .then((res) => res.json())
            .then((userTypeData) => {
                setUserTypes(userTypeData)
            });
    };

    useEffect(() => {
        fetchUserTypes();
    }, [])

    const editUpdateUserType = (userType) => {
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
      <UserTypeCreate fetchUserTypes={fetchUserTypes} token={props.token} />
      <UserTypeTable
        userTypeSet={userTypeSet}
        userTypes={userTypes}
        editUpdateUserType={editUpdateUserType}
        updateOn={updateOn}
        fetchUserTypes={fetchUserTypes}
        token={props.token.sessionToken}
      />
      {updateActive ? (
        <UserTypeEdit
          userTypeToUpdate={userTypeToUpdate}
          updateOff={updateOff}
          token={props.token}
          fetchUserTypes={fetchUserTypes}
        />
      ) : (
        <></>
      )}
    </Container>
    );
};

export default withRoot(UserTypeIndex);
