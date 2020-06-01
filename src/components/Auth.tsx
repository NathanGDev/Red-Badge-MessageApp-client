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

  return (
    <div>
<<<<<<< HEAD
      <h1>Sign up for me then</h1>
=======
>>>>>>> 83f0c73ebe846df710d70ee4e6cbaa1260d218e4
      {toggler()}
    </div>
  );
};

export default Auth;
