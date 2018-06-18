import React, { Component } from "react";
import RequestUtilities from "../Utilities/RequestUtilities.js";
import appSettings from "../AppSettings.jsx";
let settings = new appSettings();
import ResponsePanel from "../Components/ResponsePanel.jsx";
export default class ATemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      error: null,
      settings: settings
    };
  }
  async submit() {
    let requestOptions = {};
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
              <td>Submit:</td>
              <td>
                <input
                  id="submit"
                  type="button"
                  value="Submit (POST)"
                  onClick={e => {
                    this.submit("POST");
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
