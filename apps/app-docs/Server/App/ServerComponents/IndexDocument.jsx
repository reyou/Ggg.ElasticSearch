import React, { Component } from "react";
import appSettings from "../AppSettings.jsx";
import request from "request";
let settings = new appSettings();
export default class IndexDocument extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      response: null
    };
  }
  submit() {
    let self = this;
    let indexName = $("indexName").val();
    let id = $("id").val();
    let json = $("json").val();
    let url = settings.ServerHost + `/${indexName}/_doc/${id}?pretty`;
    let requestOptions = {
      method: "PUT",
      json: json,
      url: url,
      headers: {
        "User-Agent": "request",
        "Content-Type": "application/json"
      },
      rejectUnauthorized: false
    };
    request(requestOptions, function(error, response, body) {
      self.setState({
        url: url,
        error: JSON.stringify(error),
        response: JSON.stringify(response),
        body: JSON.stringify(body)
      });
    });
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <table>
          <tbody>
            <tr>
              <td>IndexName:</td>
              <td>
                <input id="indexName" type="text" />
              </td>
            </tr>
            <tr>
              <td>Id:</td>
              <td>
                <input id="id" type="text" />
              </td>
            </tr>
            <tr>
              <td>JSON:</td>
              <td>
                <textarea id="json" type="text" />
              </td>
            </tr>
            <tr>
              <td>Submit:</td>
              <td>
                <input
                  id="submit"
                  type="button"
                  value="Submit"
                  onClick={e => {
                    this.submit();
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="responsePanel">
          <pre>url: {this.state.url}</pre>
          <pre>error: {this.state.error}</pre>
          <pre>response: {this.state.response}</pre>
          <pre>body: {this.state.body}</pre>
        </div>
      </div>
    );
  }
}
