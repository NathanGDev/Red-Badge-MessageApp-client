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

interface clearTokenHelper {
  clearToken: () => any;
}

// class App extends React.Component<TokenState , TokenState> {
class App extends React.Component<any , TokenState> {
    constructor(props: any) {
    super(props);
    this.state = {
      sessionToken: null,
    };
  }

<<<<<<< HEAD
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState(() => {
        localStorage.getItem("token");
      });
    }
  }

=======
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
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
<<<<<<< HEAD
    return this.sessionToken === localStorage.getItem("token") ? (
      <ContactIndex token={this.sessionToken} />
    ) : (
      <Auth updateToken={this.updateToken} />
    );
  };

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
        {this.protectedViews()}
        <Switch>
          {/* <Route exact path="/signin">
            <Login updateToken={this.updateToken} />
          </Route> */}
          {/* <Route exact path="/home">
            <Home />
          </Route> */}
          <Route exact path="/login">
            <Login updateToken={this.updateToken} />
          </Route>
          <Route path="/signup">
            <Signup updateToken={this.updateToken} />
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
        </Switch>
      </Router>
=======
    // return (this.sessionToken === localStorage.getItem('token') ? 
    console.log('sessionToken = ' + this.sessionToken);
    return (
      localStorage.getItem('token') ? 
      <ContactIndex token={this.sessionToken}/>
      : <Auth updateToken={this.updateToken} />)
  }


  render() {
    return (
      <div>
        <NavBar clearToken={this.clearToken}/>
        {this.protectedViews()}
      </div>
      // <Router>
      //   <Switch>
      //     this.sessionToken === localStorage.getItem('token') ?
      //     <Route exact path="/contact">
      //       <ContactIndex token={this.sessionToken} />
      //     </Route>
      //     <Route exact path="/user">
      //       <UserIndex token={this.sessionToken} />
      //     </Route>
      //     <Route exact path="/usertype">
      //       <UserTypeIndex token={this.sessionToken} />
      //     </Route>
      //     :
      //     <Route path="/signup">
      //       <Signup updateToken={this.updateToken} />
      //     </Route>
      //     <Route exact path="/login">
      //       <Login updateToken={this.updateToken} />
      //     </Route>
      //     </Switch>}
      // </Router>
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
    );
  }
}
export default App;
