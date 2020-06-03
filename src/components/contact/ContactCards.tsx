import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
// import {Table, Button} from 'reactstrap';
// import APIURL from '../../helpers/environment';

const ContactCards = (props: any) => {

  const deleteContact = (contact: any) => { 
    fetch(`http://localhost:3001/contact/${contact.id}`, { 
        method: 'DELETE',
        headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token 
        })
    })
    .then(() => props.fetchContacts()) 
}

const contactMapper = () => {
    return props.contacts.map((contact: any, index: any) => { 
        return(
         
            <Card key={index}>
            <CardContent style={{textAlign: 'center' }}>
              <Typography variant="h6" component="h2" color="primary">
              {contact.firstName} {contact.lastName}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {contact.mobileNum}
                </Typography>
              <Typography variant="body1" color="textSecondary">
                {contact.fbMsgrID}
              </Typography>
            </CardContent>
            <Button color="primary" onClick={() => {props.editUpdateContact(contact); props.updateOn()}}><UpdateIcon />Edit</Button> 
            <Button color="primary" onClick={() => {deleteContact(contact)}}><DeleteIcon />Delete</Button>
          </Card>
        )
    })
}

  return (
    <React.Fragment>
    <Card>
        {contactMapper()}
    </Card>
    </React.Fragment>
  );
};
export default ContactCards;
