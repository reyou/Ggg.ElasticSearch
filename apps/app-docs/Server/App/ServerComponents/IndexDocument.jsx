import React, { Component } from "react";
export default class IndexDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <pre>{this.state.response}</pre>
      </div>
    );
  }
}
