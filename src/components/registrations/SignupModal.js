import React, { Component } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Signup from "./Signup";

export default class SignUpContainer extends Component {
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
