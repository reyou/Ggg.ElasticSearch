import React, { Component } from "react";
import appSettings from "../AppSettings.jsx";
import RequestUtilities from "../Utilities/RequestUtilities.js";
import ResponsePanel from "../Components/ResponsePanel.jsx";
import $ from "jquery";
let settings = new appSettings();
export default class CreateIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      error: null
    };
  }
  async submitCreate() {
    let indexName = $("#indexName").val();
    let url = settings.ServerHost + `/${indexName}?pretty`;
    let requestOptions = {
      method: "PUT",
      url: url
    };
    await RequestUtilities.MakeRequest(this, requestOptions);
  }
  async submitDelete() {
    let indexName = $("#indexName").val();
    let url = settings.ServerHost + `/${indexName}?pretty`;
    let requestOptions = {
      method: "DELETE",
      url: url
    };
    await RequestUtilities.MakeRequest(this, requestOptions);
  }
  render() {
    return (
      <div className="contentPanel">
        <h3>{this.props.title}</h3>
        <p>
          <a href={settings.ServerHost + "/_cat/indices?v"}>
            {settings.ServerHost}/_cat/indices?v
          </a>
          <br />
          <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/_create_an_index.html">
            https://www.elastic.co/guide/en/elasticsearch/reference/current/_create_an_index.html
          </a>
          <br />
          <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/_delete_an_index.html">
            https://www.elastic.co/guide/en/elasticsearch/reference/current/_delete_an_index.html
          </a>
        </p>
        <table>
          <tbody>
            <tr>
              <td>IndexName:</td>
              <td>
                <input id="indexName" type="text" />
              </td>
            </tr>
            <tr>
              <td>Submit:</td>
              <td>
                <input
                  id="submit"
                  type="button"
                  value="Create"
                  onClick={e => {
                    this.submitCreate();
                  }}
                />
                <input
                  id="submit"
                  type="button"
                  value="Delete"
                  onClick={e => {
                    this.submitDelete();
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
