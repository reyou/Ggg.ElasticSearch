import React, { Component } from "react";
import MenuItem from "./MenuItem.jsx";
export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      menuItems: this.getMenuItems()
    };
    this.getMenuItemsHtml = this.getMenuItemsHtml.bind(this);
  }
  getMenuItems() {
    let menuItems = [];
    menuItems.push(new MenuItem("infoLinks", "Info Links"));
    menuItems.push(new MenuItem("serverStatus", "Server Status"));
    menuItems.push(new MenuItem("createIndex", "CRUD Index"));
    menuItems.push(new MenuItem("indexDocument", "CRUD Document"));
    return menuItems;
  }
  menuItemClicked(item) {
    this.props.onMenuItemClicked(item);
  }
  getMenuItemsHtml() {
    return (
      <div>
        {this.state.menuItems.map(q => {
          return (
            <div key={q.Key}>
              <a
                className="menuLink"
                onClick={() => {
                  this.menuItemClicked(q);
                }}
              >
                {q.Title}
              </a>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div className="sideBarContainer">
        {this.getMenuItemsHtml(this.state.menuItems)}
      </div>
    );
  }
}
