import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../Header/index";
import Mobileheader from "../Mobileheader/index";
import Footer from "../Footer/index";
import LeftMenu from "./LeftMenu/index";
import Idea from "./Idea/index";
import Flashback from "./Flashback/index";
import Viral from "./Viral/index";
import Coding from "./Coding/index";
import "./style.sass";

class TheKanyeStory extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mobileheader />
        <LeftMenu />
        <div className="ks">
          <Switch>
            <Route
              path="/thekanyestory/idea"
              exact
              component={() => <Idea />}
            />
            <Route
              path="/thekanyestory/flashback"
              exact
              component={() => <Flashback />}
            />
            <Route
              path="/thekanyestory/viral"
              exact
              component={() => <Viral />}
            />
            <Route
              path="/thekanyestory/coding"
              exact
              component={() => <Coding />}
            />
            <Redirect from="/thekanyestory" to="/thekanyestory/idea" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default TheKanyeStory;
