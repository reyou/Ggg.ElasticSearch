import React, { Component } from "react";
import request from "request-promise";
import appSettings from "../AppSettings.jsx";
let settings = new appSettings();
export default class ServerStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }
  getServerStatus() {
    request
      .get(settings.ServerHost + "?pretty")
      .then(res => {
        this.setState({
          response: res
        });
      })
      .catch(err => {
        this.setState({
          response: JSON.stringify(err)
        });
      });
  }
  componentDidMount() {
    this.getServerStatus();
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
