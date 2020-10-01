import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Button,
  ButtonGroup,
  CardText,
  CardBody,
  Badge,
} from "reactstrap";

function Menu(props) {
  const menu = props.books.map((book) => {
    return (
      <div className="col-10 offset-1 offset-md-4  offset-sm-0  col-md-3 col-sm-2 m-1 mt-5">
        <Card key={book.id} className="rounded-0 border-0 cards">
          <CardImg top src={book.image} alt={book.name} height="250" />
          <CardBody>
            <CardTitle>
              <span className="h6">{book.name} </span>
            </CardTitle>
            <CardText className="text-secondary">
              -- {book.author}{" "}
              <Badge pill color="warning">
                {book.rating}
              </Badge>
              <a
                type="button"
                className="float-right text-danger"
                tag="Add to wishlist"
              >
                <i className="fa fa-heart "></i>
              </a>
            </CardText>
            <ButtonGroup>
              <Button className="btn btn-danger float-right">Read Now</Button>
              <Button className="btn btn-light btn-outline-danger float-right">
                Recommend
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <div className="container mt-2 p-2">
        <h4 className="text-center display-4">All Books</h4>
        <hr />
        <div className="row justify-content-center">{menu}</div>
      </div>
    </div>
  );
}

export default Menu;
