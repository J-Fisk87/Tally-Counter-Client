import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav"

const Home = (props) => {
  const handleClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
        props.history.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Nav loggedInStatus={props.loggedInStatus} handleClick={handleClick} />
  );
};
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
