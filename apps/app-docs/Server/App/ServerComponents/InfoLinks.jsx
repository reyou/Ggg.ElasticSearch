import React, { Component } from "react";
import request from "request-promise";
import appSettings from "../AppSettings.jsx";
let settings = new appSettings();
export default class InfoLinks extends Component {
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
        <table>
          <tbody>
            <tr>
              <td>DYRM:</td>
              <td>
                <a href="https://didyoureadme.azurewebsites.net/UserUrls/TagUrls?UserUrlTagId=ee09b4a3-f5f5-42b0-83ca-56130b8dd5b4">
                  DYRM - elastic
                </a>
              </td>
            </tr>
            <tr>
              <td>pattern:</td>
              <td>{"<REST Verb> /<Index>/<Type>/<ID>"}</td>
            </tr>
            <tr>
              <td>Root:</td>
              <td>
                <a href="http://localhost:9200">http://localhost:9200</a>
              </td>
            </tr>
            <tr>
              <td>health:</td>
              <td>
                <a href="http://localhost:9200/_cat/health?v">
                  http://localhost:9200/_cat/health?v
                </a>
              </td>
            </tr>
            <tr>
              <td>nodes:</td>
              <td>
                <a href="http://localhost:9200/_nodes?pretty">
                  http://localhost:9200/_nodes?pretty
                </a>
                <br />
                <a href="http://localhost:9200/_nodes?filter_path=**.mlockall&pretty">
                  http://localhost:9200/_nodes?filter_path=**.mlockall&pretty
                </a>
                <br />
                <a href="http://localhost:9200/_cat/nodes?v">
                  http://localhost:9200/_cat/nodes?v
                </a>
                <br />
                <a href="http://localhost:9200/_nodes/stats/process?pretty">
                  http://localhost:9200/_nodes/stats/process?pretty
                </a>
                <br />
                <a href="http://localhost:9200/_nodes/stats/process?filter_path=**.max_file_descriptors&pretty">
                  http://localhost:9200/_nodes/stats/process?filter_path=**.max_file_descriptors&pretty
                </a>
              </td>
            </tr>

            <tr>
              <td>indices:</td>
              <td>
                <a href="http://localhost:9200/_cat/indices?v">
                  http://localhost:9200/_cat/indices?v
                </a>
              </td>
            </tr>
            <tr>
              <td>settings:</td>
              <td>
                <a href="http://localhost:9200/_cluster/settings?pretty">
                  http://localhost:9200/_cluster/settings?pretty
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
