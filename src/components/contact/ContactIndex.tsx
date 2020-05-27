import React, { useState, useEffect, useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ContactCreate from './ContactCreate';
import ContactEdit from './ContactEdit';
import ContactCards from './ContactCards';
import Button from '@material-ui/core/Button';
// import APIURL from '../../helpers/environment';




const ContactIndex = (props: any) => {
    const [contacts, setContacts] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [contactToUpdate, setContactToUpdate] = useState([]);
    const [sessionToken, setSessionToken] = useState('');
    // const [state, dispatch] = useState([]);

    const fetchContacts = () => {
        fetch(`http://localhost:3000/contact/showall`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((contactData) => {
                // console.log(contactData.logName)
                setContacts(contactData.contactName)
            })
    }

    useEffect(() => {
        fetchContacts();
    }, [])

    const editUpdateContact = (contact: any) => {
        console.log(contact);
        setContactToUpdate(contact);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }


    const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
    }


    return (
        <Container>
            <ContactCreate fetchContacts={fetchContacts} token={props.token}/>
            <ContactCards contacts={contacts} editUpdateContact={editUpdateContact}
                updateOn={updateOn} fetchContacts={fetchContacts} token={props.token} />

            {updateActive ? <ContactEdit contactToUpdate={contactToUpdate}
                updateOff={updateOff} token={props.token} fetchContacts={fetchContacts} /> : <></>}
        </Container>
    )
}

export default ContactIndex;