import React, { Component } from "react";
import "./style.sass";
import { NavLink } from "react-router-dom";

class LeftMenu extends Component {
  render() {
    return (
      <div className="leftmenu">
        <div className="leftmenuinner">
          <div className="leftmenu__chapters">Chapters</div>
          <NavLink
            to={`/thekanyestory/idea`}
            className="leftmenu__inner"
            activeClassName={"leftmenu__inner-active"}>
            Idea
          </NavLink>
          <NavLink
            to={`/thekanyestory/flashback`}
            className="leftmenu__inner"
            activeClassName={"leftmenu__inner-active"}>
            Flashback
          </NavLink>
          <NavLink
            to={`/thekanyestory/viral`}
            className="leftmenu__inner"
            activeClassName={"leftmenu__inner-active"}>
            Viral
          </NavLink>
          <NavLink
            to={`/thekanyestory/coding`}
            className="leftmenu__inner"
            activeClassName={"leftmenu__inner-active"}>
            Coding
          </NavLink>
          <NavLink
            to={`/thekanyestory/doubt`}
            className="leftmenu__inner"
            activeClassName={"leftmenu__inner-active"}>
            Doubt
          </NavLink>
          <NavLink
            to={`/thekanyestory/billboards`}
            className="leftmenu__inner"
            activeClassName={"leftmenu__inner-active"}>
            Billboards
          </NavLink>
        </div>
      </div>
    );
  }
}

export default LeftMenu;
