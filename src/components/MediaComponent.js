import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import cyan from "@material-ui/core/colors/cyan";
import {
  CardActions,
  Button,
  ButtonGroup,
  Tooltip,
  Fab,
  Zoom,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function Media(props) {
  const bookList = props.books.map((book) => {
    return (
      <Card
        className="cards"
        boxShadow={1}
        style={{ maxWidth: 345 }}
        className="col-12 col-md-3 m-4 "
      >
        <CardHeader
          avatar={
            <Avatar title={book.author} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <Tooltip
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 600 }}
              title="Add to Collections"
              aria-label="add"
            >
              <Fab color="secondary">
                {" "}
                <PlaylistAddIcon />
              </Fab>
            </Tooltip>
          }
          title={book.name}
          subheader={book.author}
        />
        <Link to={`/menu/${book.id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            image={book.image}
            title={book.name}
            height="140"
            style={{ paddingTop: "60%" }}
          />
        </Link>
        <CardActions>
          <ButtonGroup
            className="mt-2 p-2"
            aria-label="contained secondary button group"
          >
            <Button variant="contained" color="secondary">
              Read
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<SendIcon />}
            >
              Recommend
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    );
  });

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">{bookList}</div>
    </div>
  );
}

export default Media;
