import React, { Component } from "react";
import request from "request-promise";
import appSettings from "../AppSettings.jsx";
let settings = new appSettings();
export default class ServerStatus extends Component {
  constructor() {
    super();
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
        <h3>Server Status</h3>
        <pre>{this.state.response}</pre>
      </div>
    );
  }
}
