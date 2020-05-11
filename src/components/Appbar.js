import React, { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import MenuLayout from "./Menu";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";

import logo from "./assets/education.svg";
import { Icon } from "@material-ui/core";

export function AppBarInclude(props) {
  const { classes, setOpen } = props;
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <div className={classes.toolbarIcon}>
        <img
          src={logo}
          width="50"
          height="50"
          alt="books"
          className={classes.logo}
        ></img>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <MenuLayout />
    </Fragment>
  );
}

export function AppBarIncludeToolbar({ classes }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        className={classes.title}
      >
        Books To Read
      </Typography>

      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Box ml={3} borderLeft={1}>
        <Button color="inherit">
          <ListItem
            onClick={handleMenu}
            color="inherit"
            alignItems="flex-start"
          >
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
                className={classes.bigAvatar}
              />
            </ListItemAvatar>
            <ListItemText
              className={classes.profileMenuHeader}
              secondary={
                <React.Fragment>
                  <span className={classes.profileMenu}>
                    <Typography
                      className={`${classes.inline} ${classes.profileMenuHeader}`}
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Gerente
                    </Typography>
                    <span className={classes.profileMenuOpen}>
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </span>
                  </span>
                </React.Fragment>
              }
            />
          </ListItem>
        </Button>
      </Box>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </Fragment>
  );
}
