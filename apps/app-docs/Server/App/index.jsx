import React, { Component } from "react";
import SideBar from "./Components/SideBar.jsx";
import * as ServerComponents from "./ServerComponents/All.jsx";
import "./app.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      content: <ServerComponents.ServerStatus title="Server Status" />
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
      <div>
        <SideBar onMenuItemClicked={this.onMenuItemClicked} />
        <div className="contentContainer">{this.state.content}</div>
      </div>
    );
  }
  getContentByItem(item) {
    switch (item.Key) {
      case "serverStatus":
        return <ServerComponents.ServerStatus title={item.Title} />;
      case "indexDocument":
        return <ServerComponents.IndexDocument title={item.Title} />;
      default:
        return null;
    }
  }
}
