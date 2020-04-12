import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Profile from "./Profile";
import Header from "./Header";

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Toolbar />
      <Profile />
    </React.Fragment>
  );
}
