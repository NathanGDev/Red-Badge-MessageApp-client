import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {
  const { updateToken } = props;
  const { updateUserType } = props;
  const { updateSalesPersonId } = props;
  const [login, setLogin] = useState(true);

  function toggle(event) {
    event.preventDefault();
    setLogin(!login);
    console.log("toggle -> login", login);
  }

  function toggler() {
    return !login ? (
      <Signup
        updateToken={updateToken}
        updateUserType={updateUserType}
        updateSalesPersonId={updateSalesPersonId}
        toggle={toggle}
      />
    ) : (
      <Login
        updateToken={updateToken}
        updateUserType={updateUserType}
        updateSalesPersonId={updateSalesPersonId}
        toggle={toggle}
      />
    );
  }
  return <div>{toggler()}</div>;
};
export default Auth;
