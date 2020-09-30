import React, { Component } from "react";
import Home from "./HomeComponent";
import { BOOKS } from "../shared/books";

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
        <Home books={this.state.books}></Home>
      </div>
    );
  }
}

export default Main;
