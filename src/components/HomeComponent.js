import React from "react";
import Header from "./HeaderComponent";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function RenderBooks(book) {
  return (
    <div>
      <Card></Card>
    </div>
  );
}

function Home(props) {
  const menu = props.books.map((book) => {
    return (
      <div className="col-12 col-md-4 m-1 mt-3">
        <Card key={book.id}>
          <CardImg top src={book.image} alt={book.name} height="300" />
          <CardImgOverlay className="text-light">
            <CardTitle>
              <h4>{book.name}</h4>
            </CardTitle>
            <CardSubtitle>{book.price}</CardSubtitle>
            {/* <CardText style="overflow: hidden;">{book.description}</CardText> */}
          </CardImgOverlay>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    </div>
  );
}

export default Home;
