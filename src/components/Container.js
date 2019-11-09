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
  state = {
    prevHeirarchy: this.getLocationHeirarchy(this.props.location)
  };

  componentWillReceiveProps() {
    this.setState({
      prevHeirarchy: this.getLocationHeirarchy(this.props.location)
    });
  }

  getLocationHeirarchy(location) {
    let locationArray = {
      "/": 0,
      "/education": 1,
      "/work": 2,
      "/interests": 3,
      "/contact": 4
    };
    let current = location.pathname;
    console.log(locationArray[current]);
    return locationArray[current];
  }
  render() {
    const { location } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 2000, exit: 2000 };
    console.log(location);

    return (
      <div className="container">
        <h1>xyluz.com</h1>
        <NavBar />

        <TransitionGroup component="div" className="inner-container">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames="pageSlider"
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <main className={"up"}>
              <Switch location={location}>
                <Route path="/" exact component={Profile} />
                <Route path="/education" component={Education} />
                <Route path="/work" component={Work} />
                <Route path="/interests" component={Interests} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </main>
          </CSSTransition>
        </TransitionGroup>

        <Arrows />
        <Socials />
      </div>
    );
  }
}

export default withRouter(Container);
