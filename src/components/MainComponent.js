import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Menu from "./Menu Component";
import Detail from "./BookDetailComponent";
import Contact from "./ContactUsComponent";
import Media from "./MediaComponent";
import { BOOKS } from "../shared/books";
import { COMMENTS } from "../shared/comments";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: BOOKS,
      comments: COMMENTS,
    };
  }

  render() {
    const BookWithId = ({ match }) => {
      return (
        <Detail
          book={
            this.state.books.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.bookId === parseInt(match.params.bookId)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route
            exact
            path="/menu"
            component={() => <Menu books={this.state.books} />}
          />
          <Route path="/menu/:dishId" component={BookWithId} />
          <Route
            exact
            path="/media"
            component={() => <Media books={this.state.books} />}
          />
          <Route exact path="/contactus" component={() => <Contact />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
