import React, { Component } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default class LogInContainer extends Component {
  state = { open: false };

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