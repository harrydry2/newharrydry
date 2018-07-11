import React, { Component } from "react";
import Header from "../Header/index";
import { Redirect, Route, Switch } from "react-router-dom";
import LeftMenu from "./LeftMenu/index";
import Iamharrydry from "./Iamharrydry/index";
import Myfriendcam from "./Myfriendcam/index";

class Diary extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="ks">
          <LeftMenu />
          <Switch>
            <Route
              path="/diary/i-am-harry-dry"
              exact
              component={() => <Iamharrydry />}
            />
            <Route
              path="/diary/my-friend-cam"
              exact
              component={() => <Myfriendcam />}
            />
            <Redirect from="/diary" to="/diary/i-am-harry-dry" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Diary;
