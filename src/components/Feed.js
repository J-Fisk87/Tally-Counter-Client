import React from "react";
import { Feed } from "semantic-ui-react";

export default class Feed extends React {
  render() {
    return (
      // the Feed can take an array of events and generate a feed automatically, as long as the keys in the array
      // match the keys in the Feed. Refer to "https://react.semantic-ui.com/views/feed/#types-events-prop"

      <Feed events={} />
    );
  }
}
