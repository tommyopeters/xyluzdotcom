import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavBar from "./NavBar";
import Arrows from "./Arrows";
import Socials from "./Socials";

import Profile from "./Profile";
import Education from "./Education";
import Work from "./Work";
import Interests from "./Interests";
import Contact from "./Contact";

class Container extends Component {
  render() {
    const { location } = this.props;
    const timeout = { enter: 800, exit: 400 };
    console.log(location);

    return (
      <TransitionGroup component="div" className="outer-container">
        <CSSTransition
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div className="container">
            <h1>xyluz.com</h1>
            <NavBar />
            <Switch location={location}>
              <Route path="/" exact component={Profile} />
              <Route path="/education" component={Education} />
              <Route path="/work" component={Work} />
              <Route path="/interests" component={Interests} />
              <Route path="/contact" component={Contact} />
            </Switch>

            <Arrows />
            <Socials />
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(Container);
