import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../services/api";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import bookImage from "../components/assets/book.jpg";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    //backgroundColor: "#f3f3f3",
  },
  inline: {
    display: "inline",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  card: {
    display: "flex",
  },
}));
const BooksStatus = (props) => {
  const classes = useStyles();

  const [books, setbooks] = useState([]);
  useEffect(() => {
    (async () => {
      await api.get("books").then((response) => setbooks(response.data));
    })();
  }, [books]);

  async function onDragEnd(result) {
    let status;
    switch (result.destination.droppableId) {
      case "to-read":
        status = 1;
        break;
      case "reading":
        status = 2;
        break;
      case "read":
        status = 3;
        break;

      default:
        break;
    }
    console.log(status);
    const formdata = new FormData();
    formdata.append("status", status);
    await api.put(`/books/${result.source.index}`, formdata).then((res) => {
      let newBooks = books;
      newBooks[newBooks.findIndex((book) => book.id === res.id)] = res.data;
      //setbooks(newBooks);
      setbooks((prevBooks) => [...prevBooks, ...newBooks]);
    });
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragUpdate={(result) => console.log(result)}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Droppable droppableId="to-read">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {provided.placeholder}
              <List className={classes.root} component={Paper}>
                <Typography variant="h4">to read</Typography>
                {books
                  .filter((book) => book.status === 1)
                  .map((book) => (
                    <Draggable
                      key={book.id}
                      draggableId={"book" + book.id}
                      index={book.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <ListItem alignItems="flex-start">
                            <Card className={classes.card}>
                              <div className={classes.details}>
                                <CardContent className={classes.content}>
                                  <Typography>{book.title}</Typography>
                                </CardContent>
                              </div>
                              <CardMedia
                                style={{ height: 0, paddingTop: "56.25%" }}
                                className={classes.cover}
                                image={require("../components/assets/book.jpg")}
                                title="Live from space album cover"
                              />
                            </Card>
                          </ListItem>
                        </div>
                      )}
                    </Draggable>
                  ))}
              </List>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="reading">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {provided.placeholder}
              <List className={classes.root}>
                <Typography variant="h4">reading</Typography>
                {books
                  .filter((book) => book.status === 2)
                  .map((book) => (
                    <Draggable
                      key={book.id}
                      draggableId={"book" + book.id}
                      index={book.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <ListItem alignItems="flex-start">
                            <Card className={classes.card}>
                              <div className={classes.details}>
                                <CardContent className={classes.content}>
                                  <Typography>{book.title}</Typography>
                                </CardContent>
                              </div>
                              <CardMedia
                                style={{ height: 0, paddingTop: "56.25%" }}
                                className={classes.cover}
                                image={require("../components/assets/book.jpg")}
                                title="Live from space album cover"
                              />
                            </Card>
                          </ListItem>
                        </div>
                      )}
                    </Draggable>
                  ))}
              </List>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="read">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {provided.placeholder}
              <List className={classes.root}>
                <Typography variant="h4">read</Typography>
                {books
                  .filter((book) => book.status === 3)
                  .map((book) => (
                    <Draggable
                      key={book.id}
                      draggableId={"book" + book.id}
                      index={book.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <ListItem alignItems="flex-start">
                            <Card className={classes.card}>
                              <div className={classes.details}>
                                <CardContent className={classes.content}>
                                  <Typography>{book.title}</Typography>
                                </CardContent>
                              </div>
                              <CardMedia
                                style={{ height: 0, paddingTop: "56.25%" }}
                                className={classes.cover}
                                image={require("../components/assets/book.jpg")}
                                title="Live from space album cover"
                              />
                            </Card>
                          </ListItem>
                        </div>
                      )}
                    </Draggable>
                  ))}
              </List>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

BooksStatus.propTypes = {};

export default BooksStatus;
