import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auth from "./components/Auth";
import Navigations from "./components/Navigations";
import ContactIndex from "././components/contact/ContactIndex";
import UserIndex from "././components/user/UserIndex";
import ContactCreate from "./components/contact/ContactCreate";
// import ContactCreate from "././components/contact/ContactCreate";

enum UserRoles {
  admin = "admin",
  user = "assistant",
  all = "salesperson"

}
const userRoles = {
  admins: [String(UserRoles.admin)],
  users: [String(UserRoles.user)],
  all: [String(UserRoles.admin), String(UserRoles.user)],
};
const App: React.FunctionComponent = () => {
  const [sessionToken, setSessionToken] = React.useState<any>("");
  // <Router>
  //   <Navigator />
  //   <Switch>
  //     <Route exact path='/' component={Login} />
  //     <Route path='./Signup' component={Signup} />
  //     <Route path='./Contact' component={ContactCreate} />
  //     <Route component={NotFound} />
  //   </Switch>
  // </Router>


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

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <ContactIndex token={sessionToken}/>
  //     : <Auth updateToken={updateToken} />)
  // }

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
        <Route exact path="/contact">
          <ContactIndex token={sessionToken} />
        </Route>
        <Route exact path="/user">
          <UserIndex token={sessionToken} />
        </Route>
        {/* {protectedViews()} */}
      </Switch>
    </Router>
  );
};

export default App;

