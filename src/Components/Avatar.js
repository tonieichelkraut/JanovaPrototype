import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { janovaStyle } from "./JanovaStyles";

const useStyles = makeStyles(janovaStyle);

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.rootAvatar}>
      <Avatar
        alt="Simon Stützer"
        src="/Images/simon_stuetzer.jpg"
        className={classes.largeAvatar}
      />
    </div>
  );
}
