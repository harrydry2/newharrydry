import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Twitter from "../../assets/icons/twitter.svg";
import Mail from "../../assets/icons/mail.svg";
import Ham from "../../assets/icons/ham.svg";
import Chevrondown from "../../assets/icons/chevrondown.svg";
import "./style.sass";

class Header extends Component {
  state = {
    navbottom: false,
    kanyeArray: [
      {
        title: "Idea",
        url: "/thekanyestory/idea"
      },
      {
        title: "Flashback",
        url: "/thekanyestory/flashback"
      },
      {
        title: "Viral",
        url: "/thekanyestory/viral"
      },
      {
        title: "Coding",
        url: "/thekanyestory/coding"
      },
      {
        title: "Billboards",
        url: "/thekanyestory/billboards"
      }
    ],
    diaryArray: [
      {
        title: "I am Harry Dry",
        url: "/diary/i-am-harry-dry"
      },
      {
        title: "My Friend Cam",
        url: "/diary/my-friend-cam"
      }
    ]
  };

  handleClick = e => {
    this.setState({
      navbottom: !this.state.navbottom
    });
  };

  renderBottomMenu = (menuArray, index) => {
    return (
      <NavLink
        to={menuArray.url}
        className="header__inner1-bottom-text"
        key={index}
        activeClassName={"leftmenu__inner-active"}>
        {index + 1}) {menuArray.title}
      </NavLink>
    );
  };

  render() {
    const kanyemenu = window.location.href.includes("thekanyestory");
    const diary = window.location.href.includes("diary");
    const { navbottom, kanyeArray, diaryArray } = this.state;
    const showNavbottom = navbottom ? "header__inner1-bottom-active" : "";
    return (
      <div className="header">
        <div className="header__inner">
          <div className="header__logo">harrydry</div>
          <div className="header__left">
            <NavLink
              to={`/thekanyestory`}
              className="header__left-text"
              activeClassName={"header__left-text-active"}>
              The Kanye Story
            </NavLink>
            <NavLink
              to={`/diary`}
              className="header__left-text"
              activeClassName={"header__left-text-active"}>
              Diary
            </NavLink>
            <NavLink
              to={`/projects`}
              className={`header__left-text`}
              activeClassName={"header__left-text-active"}>
              Projects
            </NavLink>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="icons__twitter-outer"
              href="https://twitter.com/140_Canvas">
              <Twitter className="icons__twitter" />
            </a>
            <Mail className="icons__mail" />
          </div>
          <Ham className="icons__ham" />
        </div>
        <div className="header__inner1">
          <div className="header__inner1-top">
            <div className="header__inner1-top-text">
              {kanyemenu && "The Kanye Story"}
              {diary && "Diary"}
            </div>
            <Chevrondown className="icons__down" onClick={this.handleClick} />
          </div>
          <div className={`header__inner1-bottom ${showNavbottom}`}>
            {kanyemenu && kanyeArray.map(this.renderBottomMenu)}
            {diary && diaryArray.map(this.renderBottomMenu)}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
