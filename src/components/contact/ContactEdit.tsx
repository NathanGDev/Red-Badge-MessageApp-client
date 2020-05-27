import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import APIURL from '../../helpers/environment';

const ContactEdit = (props:any) => {
    const [editFirstName, setEditFirstName] = useState("");
    const [editLastName, setEditLastName] = useState("");
    const [editMobileNum, setEditMobileNum] = useState("");
    const [editFbMsgrID, setEditFbMsgrID] = useState("");
    const [editSalesUserID, setEditSalesUserID] = useState("");
    const [editId, setEditId] = useState(props.contactToUpdate.id);
    const [value, setValue] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    
      const handleClose = (event: any, reason: any) => {
        if (reason === 'clickaway') {
          return;
        }
    
      };

    console.log(editId, "LOOT EDIT")

    const contactUpdate = (event: any, contact: any) => { 
        event.preventDefault();
        fetch(`http://localhost:3000/contact/${editId}`, {
            method: 'PUT',
            body: JSON.stringify({
                firstName: editFirstName, lastName: editLastName,
                mobileNum: editMobileNum, fbMsgrID: editFbMsgrID,
                salesUserID: editSalesUserID
        }),
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchContacts(); 
            props.updateOff();
        })
        
    }
    return(
        <Modal isOpen={true}>
            <ModalHeader>Add Contact</ModalHeader>
            <ModalBody>
                <Form onSubmit={()=>{contactUpdate}}>
                <FormGroup>
                        <Input name="first name" value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                        <Input name="last name" value={editLastName} onChange={(e) => setEditLastName(e.target.value)}/>
                </FormGroup><FormGroup>
                        <Input name="mobile number" value={editMobileNum} onChange={(e) => setEditMobileNum(e.target.value)}/>
                </FormGroup><FormGroup>
                        <Input name="fb msgr id" value={editFbMsgrID} onChange={(e) => setEditFbMsgrID(e.target.value)}/>
                </FormGroup>
        
    <Button type="submit" color="secondary" fullWidth>Update your loot!</Button>
        <Button type="submit" align="center" onClick={()=>{handleClose}}>Cancel</Button>
      </Form>
    </ModalBody>
    </Modal>
    );
};

export default ContactEdit;