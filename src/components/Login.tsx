import React from "react";
type LoginState = {
  loggedIn: true;
};

class Login extends React.Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loggedIn: true,
    };
  }
  render() {
    return (
      <div>
        <h1>Login Page</h1>
      </div>
    );
  }
}

export default Login;
