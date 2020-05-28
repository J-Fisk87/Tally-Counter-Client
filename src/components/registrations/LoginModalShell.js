import React, { Component } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

class LogInContainer extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => {
    this.props.closeModal();
    this.setState({ open: false });
  };

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
            Log In <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <Login closeModal={this.close} history={this.props.history} />
        </Modal.Content>
        {/* <Modal.Actions>
          <Button icon="check" content="All Done" onClick={this.close} />
        </Modal.Actions> */}
      </Modal>
    );
  }
}

class SignUpContainer extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  open = () => this.setState({ open: true });
  close = () => {
    this.setState({ open: false });
  };

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
            Sign Up <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <Signup closeModal={this.close} history={this.props.history} />
        </Modal.Content>
      </Modal>
    );
  }
}
class NotLoggedInModal extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  // loginSwitch(){
  //     switch (this.state.whichComponent) {
  //       case "logIn":
  //         return (<Login />);
  //         break;
  //       default:
  //         console.log('wtf');
  //     }
  // }

  render() {
    return (
      <Modal open={!this.props.loggedInStatus}>
        <Modal.Header>Please Log In or Sign Up!</Modal.Header>
        <Modal.Content>
          {/* {this.loginSwitch()} */}
          {/* <Button onClick={this.setState({whichComponent: 'logIn'})}>Login state</Button>
          <Button onClick={this.loginSwitch}>Login</Button> */}
          {/* <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link> */}
        </Modal.Content>
        <Modal.Actions>
          <LogInContainer
            closeModal={this.close}
            history={this.props.history}
          />
          <SignUpContainer
            closeModal={this.close}
            history={this.props.history}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default NotLoggedInModal;
