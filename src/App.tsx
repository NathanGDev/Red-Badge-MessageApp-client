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
import Auth from "./components/Auth";
import Navigations from "./components/Navigations";

enum UserRoles {
  admin = "admin",
  user = "user",
}
const userRoles = {
  admins: [String(UserRoles.admin)],
  users: [String(UserRoles.user)],
  all: [String(UserRoles.admin), String(UserRoles.user)],
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

  return (
    <Router>
      <div className="App">
        <Navigations updateToken={updateToken} />
      </div>
      <Switch>
        <Route exact path="/signup">
          <Auth updateToken={updateToken} />
        </Route>
        <Route exact path="/login">
          <Login updateToken={updateToken} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
