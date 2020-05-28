import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Navigations from "./components/Navigations";

enum UserRoles {
  admin = "admin",
  user = "user",
  assistant = "assistant",
}
const userRoles = {
  admins: [String(UserRoles.admin)],
  users: [String(UserRoles.user)],
  assistant: [String(UserRoles.assistant)],
  all: [
    String(UserRoles.admin),
    String(UserRoles.user),
    String(UserRoles.assistant),
  ],
};
const App: React.FunctionComponent = () => {
  const [sessionToken, setSessionToken] = React.useState<any>("");

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken: any) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log("updateToken -> newToken", newToken);
  };
  const clearToken = (sessionToken: any) => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Home token={sessionToken} clearToken={clearToken} />
    ) : (
      <Login updateToken={updateToken} />
    );
  };
  return (
    <Router>
      <div className="App">
        <Navigations updateToken={updateToken} clearToken={clearToken} />
      </div>
      <Switch>
        <Route exact path="/signin">
          <Login updateToken={updateToken} />
        </Route>
        <Route path="/signup">
          <Signup updateToken={updateToken} />
        </Route>
        {/* <Route exact path="/home">
          <Home />
        </Route> */}
      </Switch>
      {protectedViews()}
    </Router>
  );
};

export default App;
