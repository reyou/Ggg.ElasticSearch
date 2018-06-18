import React, { Component } from "react";
import RequestUtilities from "../Utilities/RequestUtilities.js";
import appSettings from "../AppSettings.jsx";
let settings = new appSettings();
import ResponsePanel from "../Components/ResponsePanel.jsx";
export default class SearchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      error: null,
      settings: settings
    };
  }
  async submit(method) {
    let indexName = $("#indexName").val();
    let query = $("#query").val();
    let url = settings.ServerHost + `/${indexName}/_search?${query}&pretty`;
    let requestOptions = {
      method: method,
      url: url
    };
    await RequestUtilities.MakeRequest(this, requestOptions);
  }
  render() {
    return (
      <div className="contentPanel">
        <h3>{this.props.title}</h3>
        <table>
          <tbody>
            <tr>
              <td>IndexName:</td>
              <td>
                <input id="indexName" type="text" defaultValue="qqq" />
              </td>
            </tr>
            <tr>
              <td>Query:</td>
              <td>
                <textarea
                  id="query"
                  defaultValue="q=*&sort=account_number:asc&pretty"
                />
              </td>
            </tr>
            <tr>
              <td>Submit:</td>
              <td>
                <input
                  id="submit"
                  type="button"
                  value="Search"
                  onClick={e => {
                    this.submit("GET");
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
