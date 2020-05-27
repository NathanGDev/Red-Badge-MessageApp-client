import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
// import APIURL from "../helpers/environment";

const ContactCreate = (props: any) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNum, setMobileNum] = useState("");
    const [fbMsgrID, setFbMsgrID] = useState("");
    const [salesUserID, setSalesUserID] = useState("");

    let handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/contact/`, {
            method: "POST",
            body: JSON.stringify({
                contact: {
                    firstName: firstName,
                    lastName: lastName,
                    mobileNum: mobileNum,
                    fbMsgrID: fbMsgrID,
                    salesUserID: salesUserID
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': props.token
            }),
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setFirstName('');
            setLastName('');
            setMobileNum('');
            setFbMsgrID('');
            setSalesUserID('');
        })
    };

    return (
        <div className="main-auth">
            <h1>Add Contact</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <label htmlFor="firstName">First Name: </label>
                <Input
                    className="auth-inputs"
                    onChange={(e:any) => setFirstName(e.target.value)}
                    name="firstname"
                    value={firstName}
                    required={true}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="lastName">Last Name: </label>
                <Input
                    className="auth-inputs"
                    onChange={(e:any) => setLastName(e.target.value)}
                    name="lastName"
                    value={lastName}
                    required={true}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="mobileNum">Mobile Number: </label>
                <Input
                    className="auth-inputs"
                    onChange={(e:any) => setMobileNum(e.target.value)}
                    name="mobileNum"
                    value={mobileNum}
                    required={true}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="fbMsgrID">Facebook Messenger ID: </label>
                <Input
                    className="auth-inputs"
                    onChange={(e:any) => setFbMsgrID(e.target.value)}
                    name="fbMsgrID"
                    value={fbMsgrID}
                    required={true}
                />
            </FormGroup>
            {/* <FormGroup>
                <label htmlFor="salesUserID">Sales User ID: </label>
                <Input
                    className="auth-inputs"
                    onChange={(e:any) => setSalesUserID(e.target.value)}
                    name="salesUserID"
                    value={salesUserID}
                    required={true}
                />
            </FormGroup> */}
                <Button className="authButton" type="submit">
                    Add Contact
        </Button>
            </Form>
        </div>
    );
};

export default ContactCreate;
