import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import Router from "./Router";
import { composeWithDevTools } from "redux-devtools-extension";
import "./assets/styles/main.sass";

render(
  <div>
    <Router />
  </div>,
  document.getElementById("root")
);
