import React from "react";
import withRoot from "./components/styling/withRoot";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auth from "./components/Auth";
// import Navigations from "./components/Navigations";
import NavBar from "./components/NavBar";
import ContactIndex from "././components/contact/ContactIndex";
import UserIndex from "././components/user/UserIndex";
import UserTypeIndex from "././components/userType/UserTypeIndex";
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
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <ContactIndex token={sessionToken}/>
      : <Auth updateToken={updateToken} />)
  }
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/signup">
          <Auth updateToken={updateToken} />
        </Route>
        <Route exact path="/login">
          <Login updateToken={updateToken} />
        </Route>
        <Route exact path="/contact">
          <ContactIndex token={sessionToken} />
        </Route>
        <Route exact path="/user">
          <UserIndex token={sessionToken} />
        </Route>
        <Route exact path="/usertype">
          <UserTypeIndex token={sessionToken} />
        </Route>
        {protectedViews()}
      </Switch>
    </Router>
  );
};
export default withRoot(App);
