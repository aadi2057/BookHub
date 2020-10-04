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
  Input,
} from "reactstrap";
import TextField from "@material-ui/core/TextField";

function RenderBooks({ book }) {
  if (book != null) {
    return (
      <div>
        <Card>
          <CardImg src={book.image} alt={book.name} height="250" />
          <CardBody>
            <CardTitle>{book.name}</CardTitle>
            <CardText className="text-secondary">
              -- {book.author}{" "}
              <Badge pill color="warning">
                {book.rating}
              </Badge>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderDescription({ book }) {
  if (book != null) {
    return (
      <div>
        <h5 className="">Description</h5>
        <div className="text-justify">{book.description}</div>
      </div>
    );
  }
}

function RenderComments({ comments }) {
  const commentList = comments.map((comment) => {
    return (
      <li key={comment.bookId}>
        <p>
          {comment.author} <Badge>{comment.rating}</Badge>{" "}
        </p>
        <p>{comment.comment}</p>
      </li>
    );
  });
  return (
    <div className="col-11 col-md-8">
      <div className="row offset-md-1 justify-content-center">
        <TextField
          fullWidth
          p={2}
          id="outlined-basic"
          variant="standard"
          label="Add a Comment..."
        />
      </div>
      <ul className="col-12 list-unstyled">{commentList}</ul>
      <div>{comments.comment}</div>
    </div>
  );
}

function Detail(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.book.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3 className="d-block text-center display-4">{props.book.name}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 m-1">
          <RenderBooks book={props.book} />
        </div>
        <div className="col-12 col-md-7 m-1">
          <RenderDescription book={props.book} />
        </div>
      </div>
      <div className="row mt-4">
        <RenderComments comments={props.comments}></RenderComments>
      </div>
      {/* <Card>
        <CardImg top src={props.book.image} alt={props.book.name} />
      </Card> */}
    </div>
  );
}

export default Detail;
