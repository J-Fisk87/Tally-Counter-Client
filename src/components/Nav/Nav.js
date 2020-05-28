import { Card, Icon, Image, Button } from "semantic-ui-react";
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = (props) => {
  return (
    <nav className="navbar">
      <React.Fragment>
        {props.loggedInStatus ? (
          <span>
            <Link to="/logout" onClick={props.handleClick}>
              <Button>Log Out :(</Button>
            </Link>
          </span>
        ) : (
          <span>
            <Link to="/login">
              <Button>Log In!</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up!</Button>
            </Link>
          </span>
        )}
      </React.Fragment>
    </nav>
  );
};

export default Nav;
