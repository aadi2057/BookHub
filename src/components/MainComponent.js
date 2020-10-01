import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Menu from "./Menu Component";
import Contact from "./ContactUsComponent";
import { BOOKS } from "../shared/books";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: BOOKS,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route
            path="/menu"
            component={() => <Menu books={this.state.books} />}
          />
          <Route path="/contactus" component={() => <Contact />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
