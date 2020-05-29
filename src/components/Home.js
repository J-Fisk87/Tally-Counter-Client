import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";
import Window from "./Window";
import UserFeed from "./UserFeed/UserFeed";
import LoginModal from "./registrations/LoginModalShell";
import { Grid } from "semantic-ui-react";

const API = "http://localhost:3001";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      allTallies: [],
      allComments: [],
    };
  }

  componentDidMount() {
    this.getAllTallies();
    this.getAllComments();
  }

  getAllTallies = () => {
    fetch(`${API}/tallies`)
      .then((res) => res.json())
      .then((tallies) =>
        // this.setState({
          allTallies: tallies.map(tally => {
            console.log(tally),
            {
            date: tally.created_at,
            summary: tally.content
            // user: User.find(user => user.id === tally.user_id)
          }
        }),
        // })
      );
  };

  getAllComments = () => {
    fetch(`${API}/comments`)
      .then((res) => res.json())
      .then((comments) =>
        this.setState({
          allComments: comments,
        })
      )
      .then();
  };

  logOut = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
        this.props.history.push("/");
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <React.Fragment>
        <Grid container alignItems="right">
          <Nav
            loggedInStatus={this.props.loggedInStatus}
            handleClick={this.logOut}
          />
          <Window />
          <UserFeed
            getAllTallies={this.getAllTallies}
            allTallies={this.state.allTallies}
          />
        </Grid>
        {/* <LoginModal
        open={props.loggedInStatus}
        // loggedInStatus={props.loggedInStatus}
        history={props.history}
      /> */}
      </React.Fragment>
    );
  }
}
export default Home;

{
  /* <div>
      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/signup">Sign Up</Link>
      <br></br>
      {props.loggedInStatus ? (
        <Link to="/logout" onClick={handleClick}>
          Log Out
        </Link>
      ) : null}
</div> */
}
