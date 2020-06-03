import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Auth from "./components/Auth";
// import Navigations from "./components/Navigations";
import NavBar from "./components/NavBar";
import ContactIndex from "././components/contact/ContactIndex";
import UserIndex from "././components/user/UserIndex";
import UserTypeIndex from "././components/userType/UserTypeIndex";


// enum UserRoles {
//   admin = "admin",
//   user = "user",
//   assistant = "assistant",
// }
// const userRoles = {
//   admins: [String(UserRoles.admin)],
//   users: [String(UserRoles.user)],
//   assistant: [String(UserRoles.assistant)],
//   all: [
//     String(UserRoles.admin),
//     String(UserRoles.user),
//     String(UserRoles.assistant),
//   ],
// };
type TokenState = {
  sessionToken?: any;
};

class App extends React.Component<TokenState, TokenState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sessionToken: null,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState(() => {
        localStorage.getItem("token");
      });
    }
  }

  updateToken = (newToken: any) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
    console.log("updateToken -> newToken", newToken);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState(null);
  };

  sessionToken!: any;

  protectedViews = () => {
    return (this.sessionToken === localStorage.getItem('token') ? <ContactIndex token={this.sessionToken} />
      : <Auth updateToken={this.updateToken} />)
  }

  // protectedViews = () => {
  //   return this.sessionToken === localStorage.getItem("token") ? (
  //     <Home token={this.updateToken}/>
  //   ) : (
  //     <Login updateToken={this.updateToken} />
  //   );
  // };


  render() {
    return (
      <Router>
        {/* <div className="App">
          <Navigations
            updateToken={this.updateToken}
            clearToken={this.clearToken}
          />
        </div> */}
        <Switch>
          {/* <Route exact path="/signin">
            <Login updateToken={this.updateToken} />
          </Route> */}
          <Route path="/signup">
            <Signup updateToken={this.updateToken} />
          </Route>
          {/* <Route exact path="/home">
            <Home />
          </Route> */}
          <Route exact path="/login">
            <Login updateToken={this.updateToken} />
          </Route>
          <Route exact path="/contact">
            <ContactIndex token={this.sessionToken} />
          </Route>
          <Route exact path="/user">
            <UserIndex token={this.sessionToken} />
          </Route>
          <Route exact path="/usertype">
            <UserTypeIndex token={this.sessionToken} />
          </Route>
          {this.protectedViews()}
        </Switch>
      </Router>
    );
  }
}
export default App;