import React, { Component } from "react";
import SideBar from "./Components/SideBar.jsx";
import * as ServerComponents from "./ServerComponents/All.jsx";
import "./app.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      content: <ServerComponents.InfoLinks title="Info Links" />
    };
    this.onMenuItemClicked = this.onMenuItemClicked.bind(this);
  }
  loadComponent(item) {
    this.setState({
      content: this.getContentByItem(item)
    });
  }
  onMenuItemClicked(item) {
    this.loadComponent(item);
  }
  render() {
    return (
      <div className="indexContainer">
        <table>
          <tbody>
            <tr>
              <td>
                <SideBar onMenuItemClicked={this.onMenuItemClicked} />
              </td>
              <td>
                <div className="contentContainer">{this.state.content}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  getContentByItem(item) {
    switch (item.Key) {
      case "serverStatus":
        return <ServerComponents.ServerStatus title={item.Title} />;
      case "indexDocument":
        return <ServerComponents.IndexDocument title={item.Title} />;
      case "createIndex":
        return <ServerComponents.CreateIndex title={item.Title} />;
      case "infoLinks":
        return <ServerComponents.InfoLinks title={item.Title} />;
      default:
        return null;
    }
  }
}
