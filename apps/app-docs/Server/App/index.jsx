import React, { Component } from "react";
import SideBar from "./Components/SideBar.jsx";
import * as ServerComponents from "./ServerComponents/All.jsx";
import "./app.css";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            content: null
        }
        this.onMenuItemClicked = this.onMenuItemClicked.bind(this);
    }
    getContentByItem(item) {
        switch (item.Key) {
            case "serverStatus":
                return <ServerComponents.ServerStatus></ServerComponents.ServerStatus>;
            case "indexList":
                return <ServerComponents.ServerStatus></ServerComponents.ServerStatus>;
            default:
                return null;
        }
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
                {this.state.content}
            </div>
        );
    }
}
