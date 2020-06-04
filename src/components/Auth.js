import React, { Component, useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {

    const { updateToken } = props;
    const { updateUserType } = props;

    const [login, setLogin] = useState(true);

    function toggle(event) {
        event.preventDefault();
        setLogin(!login);
        console.log("toggle -> login", login);
    }

    function toggler() {
        return !login ? (
        <Signup updateToken={updateToken} updateUserType={updateUserType} />
        ) : (
        <Login updateToken={updateToken} updateUserType={updateUserType} />
        );
    }

    return (
        <div>
        {toggler()}
        </div>
    );
    };

export default Auth;