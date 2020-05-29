import React from "react";
import { Feed, Grid } from "semantic-ui-react";
// import './UserFeed.css'

export default class UserFeed extends React.Component {
  render() {
    const { allTallies } = this.props;
    // console.log(allTallies);
    if (allTallies.length) {
      const formatted = allTallies.map((tally) => {
        return tally;
      });
      console.log(formatted)
    }

    // console.log(formatted);
    return <Feed events={null} className="ui five wide column" />;
  }
}
