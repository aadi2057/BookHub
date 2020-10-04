import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";

function RenderMenuItem({ book }) {
  return (
    <Card key={book.id} className="rounded-0 border-0 cards">
      <Link to={`/menu/${book.id}`} style={{ textDecoration: "none" }}>
        <CardImg
          top
          className="rounded-0"
          src={book.image}
          alt={book.name}
          height="250"
        />

        <CardBody className=" text-dark">
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
              className="float-right d-inline-block float-sm-right text-danger"
              tag="Add to wishlist"
            >
              <i className="fa fa-heart "></i>
            </a>
          </CardText>
          <ButtonGroup>
            <Button
              variant="contained"
              color="secondary"
              className="btn float-right"
            >
              Read Now
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className="float-right"
            >
              Recommend
            </Button>
          </ButtonGroup>
        </CardBody>
      </Link>
    </Card>
  );
}

function Menu(props) {
  const menu = props.books.map((book) => {
    return (
      <div
        key={book.id}
        className="col-10 books offset-lg-4  col-lg-3 col-sm-6 m-lg-2 mt-1 rounded-0 p-2"
      >
        <RenderMenuItem book={book} />
      </div>
    );
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active> Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="offset-lg-3 offset-2">
            <h4 className=" text-center display-4">All Books</h4>
          </div>
        </div>

        <hr />
      </div>
      <div className="container testimonial-group">
        <div className="row justify-content-center">{menu}</div>
      </div>
    </div>
  );
}

export default Menu;
