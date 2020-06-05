import React, { useState } from "react";
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
// import Navigations from "./components/Navigations";
import NavBar from "./components/NavBar";
import ContactIndex from "./components/contact/ContactIndex";
import UserIndex from "./components/user/UserIndex";
import UserTypeIndex from "./components/userType/UserTypeIndex";
import history from "./components/history";
import { string } from "prop-types";

// class App extends React.Component<TokenState , TokenState> {
const App = () => {
  const [sessionToken, setSessionToken] = useState("");
  const [userType, setUserType] = useState("");
  const [salesPersonId, setSalesPersonId] = useState("");

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken({ sessionToken: newToken });
    console.log("updateToken -> newToken", newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    // return (sessionToken === localStorage.getItem('token') ?
    console.log("sessionToken = " + sessionToken);
    return localStorage.getItem("token") ? (
      <ContactIndex token={sessionToken} />
    ) : (
      <Auth
        updateToken={updateToken}
        updateUserType={setUserType}
        updateSalesPersonId={setSalesPersonId}
      />
    );
  };

  return (
    <div>
      <Router>
        <NavBar
          userType={userType}
          token={sessionToken}
          clearToken={clearToken}
          updateToken={updateToken}
          updateUserType={setUserType}
          updateSalesPersonId={setSalesPersonId}
        />
      </Router>
      {/* {protectedViews()} */}

      {/* {localStorage.getItem("token") ? (
        <Router>
          <Switch>
          <Route
          exact
              path="/home"
              render={() => (
                <div>
                <Home token={sessionToken} />
                </div>
                )}
                />
                <Route path="/user">
                <UserIndex token={sessionToken} />
                </Route>
            <Route
            path="/contact"
            render={() => (
              <div>
              <ContactIndex token={sessionToken} />
              </div>
              )}
              />
              <Route path="/usertype">
              <UserTypeIndex token={sessionToken} />
              </Route>
              <Route path="/signup">
              <Signup updateToken={updateToken} />
              </Route>
              <Route path="/login">
              <Login updateToken={updateToken} />
              </Route>
              </Switch>
              </Router>
              ) : (
        <Auth
        updateToken={updateToken}
        updateUserType={setUserType}
        updateSalesPersonId={setSalesPersonId}
        />
      )} */}
    </div>
  );
};
export default App;
