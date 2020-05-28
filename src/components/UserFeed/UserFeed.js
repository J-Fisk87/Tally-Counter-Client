import React from "react";
import { Feed, Grid } from "semantic-ui-react";
// import './UserFeed.css'

export default class UserFeed extends React.Component {
  render() {
    return (
      // the Feed can take an array of events and generate a feed automatically, as long as the keys in the array
      // match the keys in the Feed. Refer to "https://react.semantic-ui.com/views/feed/#types-events-prop"

      // "Feed" is a semantic-ui tag, "UserFeed" is our react class component
        <Feed events={null} className="ui five wide column" />
    );
  }
}
