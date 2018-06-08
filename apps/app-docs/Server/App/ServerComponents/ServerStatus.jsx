import React, { Component } from "react";
import request from "request-promise";

export default class ServerStatus extends Component {
    constructor() {
        super();
        this.state = {
            serverStatus: null
        }
    }
    getServerStatus() {
        request.get("http://localhost:9200").then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
    componentDidMount() {
        this.getServerStatus();
    }
    render() {
        return <div>
            <h3>Server Status</h3>
            {this.state.serverStatus}
        </div>
    }
}