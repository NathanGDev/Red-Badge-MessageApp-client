import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
// import APIURL from "../helpers/environment";

const UserCreate = (props: any) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNum, setMobileNum] = useState("");
    const [fbMsgrId, setFbMsgrId] = useState("");
    const [password, setPassword] = useState("");
    // const [userId, setUserId] = useState("");

    console.log(props)

    let handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3001/user`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    mobileNum: mobileNum,
                    fbMsgrId: fbMsgrId,
                    password: password
                    // salesUserId: userId
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': props.token
            }),
        }).then((response) => response.json())
        .then((userData) => {
            console.log(userData);
            setFirstName('');
            setLastName('');
            setMobileNum('');
            setFbMsgrId('');
            // setUserId('');
            props.fetchUsers();
        });
    };

    return (
        <div>
            <h1>Add User</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="firstName">First Name: </Label>
                <Input
                    onChange={(e:any) => setFirstName(e.target.value)}
                    name="firstname"
                    value={firstName}
                    required={true}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="lastName">Last Name: </Label>
                <Input
                    onChange={(e:any) => setLastName(e.target.value)}
                    name="lastName"
                    value={lastName}
                    required={true}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email: </Label>
                <Input
                    onChange={(e:any) => setEmail(e.target.value)}
                    name="email"
                    value={email}
                    required={true}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="mobileNum">Mobile Number: </Label>
                <Input
                    onChange={(e:any) => setMobileNum(e.target.value)}
                    name="mobileNum"
                    value={mobileNum}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="fbMsgrID">Facebook Messenger ID: </Label>
                <Input
                    onChange={(e:any) => setFbMsgrId(e.target.value)}
                    name="fbMsgrId"
                    value={fbMsgrId}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password: </Label>
                <Input
                    onChange={(e:any) => setPassword(e.target.value)}
                    name="password"
                    value={password}
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
                <Button type="submit">Add User</Button>
            </Form>
        </div>
    );
};

export default UserCreate;
