import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { MenuItem, Button, Menu } from "@material-ui/core";
// import APIURL from "../helpers/environment";

const Signup = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [userTypeSalesman, setUserTypeSalesman] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); //  MenuDropdown Toggle

  let handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:1337/signin/create`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          mobileNum: mobileNum,
          userType: userTypeSalesman,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    setAnchorEl(null);
    setUserTypeSalesman(true);
    let { userTypeSalesman } = event?.currentTarget.dataset;
    console.log(userTypeSalesman);
  };

  return (
    <div className="main-auth">
      <h1>Sign up</h1>
      <FormGroup>
        <label htmlFor="firstName">First Name: </label>
        <Input
          className="auth-inputs"
          onChange={(e) => setFirstName(e.target.value)}
          name="firstname"
          value={firstName}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="lastName">Last Name: </label>
        <Input
          className="auth-inputs"
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
          value={lastName}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="mobileNum">Phone Number: </label>
        <Input
          className="auth-inputs"
          onChange={(e) => setMobileNum(e.target.value)}
          name="mobileNum"
          value={mobileNum}
          required={true}
        />
      </FormGroup>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email: </Label>
          <Input
            className="auth-inputs"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
            required={true}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password: </label>
          <Input
            className="auth-inputs"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            value={password}
            required={true}
          />
        </FormGroup>
        <FormGroup>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem data-my-value={userTypeSalesman} onClick={handleClose}>
              <div>Salesman</div>
            </MenuItem>
            <MenuItem onClick={handleClose} disabled>
              Assistant
            </MenuItem>
            <MenuItem onClick={handleClose} disabled>
              System Admin
            </MenuItem>
          </Menu>
        </FormGroup>
        <br />
        <Button onClick={handleSubmit}>Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
