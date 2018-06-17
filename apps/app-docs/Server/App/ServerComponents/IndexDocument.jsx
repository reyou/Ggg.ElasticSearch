import React, { Component } from "react";
import appSettings from "../AppSettings.jsx";
import request from "request-promise";
import $ from "jquery";
import RequestUtilities from "../Utilities/RequestUtilities.js";
import ResponsePanel from "../Components/ResponsePanel.jsx";

let settings = new appSettings();
export default class IndexDocument extends Component {
  constructor(props) {
    super(props);
    this.submitCreate = this.submitCreate.bind(this);
    this.state = {
      response: null
    };
  }
  async submitCreate(method) {
    let indexName = $("#indexName").val();
    let id = $("#id").val();
    let json = $("#json").val();
    let url = settings.ServerHost + `/${indexName}/_doc/${id}?pretty`;
    let requestOptions = {
      method: method,
      json: JSON.parse(json),
      url: url
    };
    RequestUtilities.MakeRequest(this, requestOptions);
  }
  async submitDelete() {
    let indexName = $("#indexName").val();
    let id = $("#id").val();
    let url = settings.ServerHost + `/${indexName}/_doc/${id}?pretty`;
    let requestOptions = {
      method: "DELETE",
      url: url
    };
    RequestUtilities.MakeRequest(this, requestOptions);
  }
  async submitRead() {
    let indexName = $("#indexName").val();
    let id = $("#id").val();
    let url = settings.ServerHost + `/${indexName}/_doc/${id}?pretty`;
    let requestOptions = {
      method: "GET",
      url: url
    };
    RequestUtilities.MakeRequest(this, requestOptions);
  }
  async componentDidMount() {
    let response = await request("https://randomuser.me/api/");
    $("#json").val(response);
  }
  render() {
    return (
      <div className="contentPanel">
        <h3>{this.props.title}</h3>
        <p>
          <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/_updating_documents.html">
            https://www.elastic.co/guide/en/elasticsearch/reference/current/_updating_documents.html
          </a>
          <br />
          <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/_deleting_documents.html">
            https://www.elastic.co/guide/en/elasticsearch/reference/current/_deleting_documents.html
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
                  value="Create (POST)"
                  onClick={e => {
                    this.submitCreate("POST");
                  }}
                />
                <input
                  id="submit"
                  type="button"
                  value="Create (PUT)"
                  onClick={e => {
                    this.submitCreate("PUT");
                  }}
                />
                <input
                  id="submit"
                  type="button"
                  value="Read"
                  onClick={e => {
                    this.submitRead();
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
