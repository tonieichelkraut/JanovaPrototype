import React from "react";
import Container from "@material-ui/core/Container";
import ThreeColumns from "./ThreeColumns";
import Tabs from "./Tabs";
//import { janovaStyle } from "./JanovaStyles";
//import { makeStyles } from "@material-ui/core/styles";

//const useStyles = makeStyles(janovaStyle);

export default function Profile(props) {
  //const classes = useStyles();
  return (
    <Container disableGutters={true}>
      <ThreeColumns />
      <Tabs />
    </Container>
  );
}
