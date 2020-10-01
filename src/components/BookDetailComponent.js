import React from "react";
import { Link } from "react-router-dom";
import {
  CardImg,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
} from "reactstrap";

function RenderBooks({ book }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={book.image} alt={book.name} />
        <CardBody>
          <CardTitle>{book.name}</CardTitle>
          <CardText className="text-secondary">
            -- {book.author}{" "}
            <Badge pill color="warning">
              {book.rating}
            </Badge>
          </CardText>
          <CardText>{book.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function Detail(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.book.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <RenderBooks book={props.book} />
      </div>
      {/* <Card>
        <CardImg top src={props.book.image} alt={props.book.name} />
      </Card> */}
    </div>
  );
}

export default Detail;
