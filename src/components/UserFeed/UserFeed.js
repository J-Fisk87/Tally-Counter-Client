import React from "react";
import { Feed, Grid } from "semantic-ui-react";
// import './UserFeed.css'

export default class UserFeed extends React.Component {

  render() {
    // const formatted = this.state.newAllTallies.map(tally => {
    //   return tally
    // })
    // console.log(formatted);
    return <Feed events={this.props.allTallies} className="ui five wide column" />;
  }
}
