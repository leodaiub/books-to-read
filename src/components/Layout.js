import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { useStylesApp } from "./assets/style.js";
import { AppBarInclude, AppBarIncludeToolbar } from "./Appbar";
import Main from "./Main";

// import "./assets/scss/index.scss";

export default function Layout({ children: props }) {
  const classes = useStylesApp();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={`${classes.root} layout`}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <AppBarIncludeToolbar classes={classes} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <AppBarInclude setOpen={setOpen} classes={classes} />
      </Drawer>

      {/* BODY CONTENTS */}
      <Main classes={classes}>{props}</Main>
    </div>
  );
}
