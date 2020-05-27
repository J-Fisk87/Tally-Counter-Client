import { Card, Icon, Image } from "semantic-ui-react";
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
                Log Out
              </Link>
            </span>
          ) : (
              <span>
                <Link to="/login">Log In</Link>
                {/* <br></br> */}
                <Link to="/signup">Sign Up</Link>
                {/* <br></br> */}
              </span>
          )}
        </React.Fragment>
    </nav>
  );
};

export default Nav;
