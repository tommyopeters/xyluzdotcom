import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Container from "./components/Container";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter component="main">
        <Container />
      </BrowserRouter>
    );
  }
}
