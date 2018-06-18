import React, { Component } from "react";
import RequestUtilities from "../Utilities/RequestUtilities.js";
import appSettings from "../AppSettings.jsx";
let settings = new appSettings();
import ResponsePanel from "../Components/ResponsePanel.jsx";
export default class BatchProcessing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      settings: settings
    };
  }
  async submitCreate(method) {
    let indexName = $("#indexName").val();
    // let id = $("#id").val();
    let json = $("#json").val();
    let url = settings.ServerHost + `/${indexName}/_doc/_bulk?pretty`;
    let requestOptions = {
      method: method,
      body: json,
      url: url
    };
    RequestUtilities.MakeRequest(this, requestOptions);
  }
  render() {
    return (
      <div className="contentPanel">
        <h3>{this.props.title}</h3>
        <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/_batch_processing.html">
          https://www.elastic.co/guide/en/elasticsearch/reference/current/_batch_processing.html
        </a>
        <br />
        <table>
          <tbody>
            <tr>
              <td>IndexName:</td>
              <td>
                <input id="indexName" type="text" defaultValue="qqq" />
              </td>
            </tr>
            <tr>
              <td>JSON:</td>
              <td>
                <textarea
                  id="json"
                  type="text"
                  defaultValue={`{"index":{"_id":"1"}}
{"name": "John Doe" }
{"index":{"_id":"2"}}
{"name": "Jane Doe" }
{"update":{"_id":"1"}}
{"doc": { "name": "John Doe becomes Jane Doe" } }
{"delete":{"_id":"2"}}
`}
                />
              </td>
            </tr>
            <tr>
              <td>Submit:</td>
              <td>
                <input
                  id="submit"
                  type="button"
                  value="Create (POST)"
                  onClick={e => {
                    this.submitCreate("POST");
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <ResponsePanel state={this.state} />
      </div>
    );
  }
}
