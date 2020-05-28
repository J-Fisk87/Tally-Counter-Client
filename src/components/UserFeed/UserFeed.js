import React from "react";
import { Feed, Grid } from "semantic-ui-react";
// import './UserFeed.css'

export default class UserFeed extends React.Component {
  componentDidUpdate() {
    let tallyEvents = this.props.allTallies.data.map(
      (t) => (t.summary = t.content)
    );
    console.log(tallyEvents);
  }

  render() {
    return <Feed events={null} className="ui five wide column" />;
  }
}
