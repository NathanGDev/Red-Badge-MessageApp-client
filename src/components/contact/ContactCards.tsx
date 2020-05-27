import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
// import {Table, Button} from 'reactstrap';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Paper from '@material-ui/core/Paper';
// import APIURL from '../../helpers/environment';

const ContactCards = (props: any) => {
const [expanded, setExpanded] = React.useState(false);
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };  

  const handleClose = () => {
    setAnchorEl(null);
  };
const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteContact = (contact: any) => { 
    fetch(`http://localhost:3000/contact/${contact.id}`, { 
        method: 'DELETE',
        headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token 
        })
    })
    .then(() => props.fetchContacts()) 
}
console.log('CARDS', props)

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

