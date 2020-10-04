import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
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
        style={{ maxWidth: 500 }}
        className="col-12 col-md-3 m-4 "
      >
        <CardHeader
          avatar={
            <Avatar
              src="assets/images/avatar.png"
              title={book.author}
              aria-label="recipe"
            ></Avatar>
          }
          action={
            <Tooltip
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 400 }}
              title="Add to Collections"
              aria-label="add"
            >
              <Fab color="secondary" size="small" className="ml-1">
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
