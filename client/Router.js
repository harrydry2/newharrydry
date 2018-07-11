import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TheKanyeStory from "./components/TheKanyeStory";
import Idea from "./components/TheKanyeStory/Idea/index";
import Diary from "./components/Diary";
import Page3 from "./components/Projects";

class Router extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/thekanyestory" component={() => <TheKanyeStory />} />
          <Route path="/diary" component={() => <Diary />} />
          <Route path="/projects" component={() => <Page3 />} />
          <Redirect from="/" to="/thekanyestory" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
