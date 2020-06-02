import React, { useState } from "react";
import Signup from "./Signup";

const Login = (props: any) => {
  const [email, setEmail] = React.useState<any>({
    email: null,
    password: null,
  });
  const [password, setPassword] = React.useState<any>("");

  let handleSubmit = (event: any) => {
    event?.preventDefault();
    fetch(`http://localhost:3000/signin`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data: any) => {
        props.updateToken(data.sessionToken);
        console.log(data);
      });
  };

  // Unused function for the time being

  // function IsRememberMe() {
  //   if (rmCheck.checked && userInput.value !== "") {
  //     localStorage.username = userInput.value;
  //     localStorage.checkbox = rmCheck.value;
  //   } else {
  //     localStorage.username = "";
  //     localStorage.checkbox = "";
  //   }
  // }
  let needAccount = () => {
    return <Signup />;
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Remember Me </label>
          <input type="checkbox" value="IsRememberMe" id="rememberMe" />
        </div>
        <button type="submit" value="login" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <a href="/signup">Need to create an account?</a>
    </div>
  );
};

export default Login;
