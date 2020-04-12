import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { janovaStyle } from "./JanovaStyles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(janovaStyle);

export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar elevation={1}>
      <Toolbar className={classes.titleContainer}>
        <Typography variant="h6" className={classes.titleName}>
          Simon Stützer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
