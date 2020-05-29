import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Signup extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props,
    } = this;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNum, setMobileNum] = useState("");

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

          <Button className="authButton" type="submit">
            Signup
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
