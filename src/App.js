import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import "./App.css"

const API = "http://localhost:3001"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      allTallies: [],
      allComments: [],
    };
  }
  componentDidMount() {
    this.loginStatus();
    this.getAllTallies();
    this.getAllComments();
  }

  loginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  getAllTallies = () => {
    fetch(`${API}/tallies`)
      .then((res) => res.json())
      .then((tallies) =>
        this.setState({
          allTallies: tallies,
        })
      );
  };

  getAllComments = () => {
    fetch(`${API}/comments`)
      .then((res) => res.json())
      .then((comments) =>
        this.setState({
          allComments: comments,
        })
      );
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  handleLogout={this.handleLogout} //pass prop
                  loggedInStatus={this.state.isLoggedIn}
                  allComments={this.state.allComments}
                  allTallies={this.state.allTallies}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={(props) => (
                <Signup
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
