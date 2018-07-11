import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.sass";

class LeftMenu extends Component {
  render() {
    return (
      <div className="leftmenu">
        <div className="leftmenu__chapters">Diary</div>
        <NavLink
          to={`/diary/genius`}
          className="leftmenu__inner"
          activeClassName={"leftmenu__inner-active"}>
          Spent £70. Reached 3 million
        </NavLink>
      </div>
    );
  }
}

export default LeftMenu;
