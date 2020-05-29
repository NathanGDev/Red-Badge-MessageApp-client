import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";



class Auth extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props,
    } = this;

    const [login, setLogin] = React.useState<boolean>(true);

    function toggle(event: any) {
      event.preventDefault();
      setLogin(!login);
      console.log("toggle -> login", login);
    }

    function toggler() {
      return login ? (
        <Signup updateToken={props.updateToken} />
      ) : (
        <Login updateToken={props.updateToken} />
      );
    }

    return (
      <div>
        <h1>Sign up for me then</h1>
        {toggler()}
      </div>
    );
  }
}

export default Auth;
