import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Copyright from "../../../_general/Copyright/Copyright";
import clsx from "clsx";

export default function Main(props) {
  const { children, classes } = props;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={fixedHeightPaper}>{children}</Paper>
          </Grid>
        </Grid>
      </Container>
      {/* <Copyright /> */}
    </main>
  );
}
