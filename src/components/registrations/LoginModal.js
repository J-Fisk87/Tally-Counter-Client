import React, { Component } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "./Login";

class NestedModal extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size="small"
        trigger={
          <Button primary icon>
            Proceed <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon="check" content="All Done" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
        whichComponent: ""
    }
  }

  loginSwitch(){
      switch (this.state.whichComponent) {
        case "logIn":
          return (<Login />);
          break;
        default:
          console.log('wtf');
      }
  }

render(){
    return(
    <Modal open={!this.props.loggedInStatus}>
      <Modal.Header>Modal #1</Modal.Header>
      <Modal.Content>
          {/* {this.loginSwitch()} */}
          <Button onClick={this.setState({whichComponent: 'logIn'})}>Login state</Button>
          <Button onClick={this.loginSwitch}>Login</Button>
        {/* <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link> */}
      </Modal.Content>
      <Modal.Actions>
        <NestedModal />
      </Modal.Actions>
    </Modal>
    )}
  }


export default LoginModal;
