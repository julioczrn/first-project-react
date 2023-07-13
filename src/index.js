import React from "react";
import ReactDOM from "react-dom";
import Home from "./Container/Home";
import Users from "./Container/Users"
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <> 
  <Users /> 
  <GlobalStyle />
  </>,
  document.getElementById("root")
);