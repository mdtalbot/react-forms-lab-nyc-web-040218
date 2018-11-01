import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleTweet = (event) => {
    this.setState({ tweet: event.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} name="tweet" onChange={this.handleTweet} />
        <br></br>
        <br></br>
        Characters remaining: {this.props.maxChars - this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
