import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Nav from "./components/Nav";
import Arrows from "./components/Arrows";
import Socials from "./components/Socials";

import Profile from "./components/Profile";
import Education from "./components/Education";
import Work from "./components/Work";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter component="main">
        <div className="container">
          <h1>xyluz.com</h1>
          <Nav />
          <Route path="/" exact component={Profile} />
          <Route path="/education" component={Education} />
          <Route path="/work" component={Work} />
          <Route path="/interests" component={Interests} />
          <Route path="/contact" component={Contact} />
          <Arrows />
          <Socials />
        </div>
      </BrowserRouter>
    );
  }
}
