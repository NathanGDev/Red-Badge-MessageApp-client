import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props: any) => {
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

  return <div>{toggler()}</div>;
};

export default Auth;
