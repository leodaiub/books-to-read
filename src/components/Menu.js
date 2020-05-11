import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CategoryIcon from "@material-ui/icons/Category";
import BookIcon from "@material-ui/icons/Book";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

export default function Menu() {
  return (
    <Fragment>
      <Divider />
      <List>
        <Link to="/books-status">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Books Status" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/books">
          <ListItem button>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Books" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/categories">
          <ListItem button>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  );
}
