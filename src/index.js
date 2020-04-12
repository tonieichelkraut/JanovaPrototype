import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import "./styles.css";
import { MuiThemeProvider } from "@material-ui/core";
import { janovaTheme } from "./JanovaTheme";

console.log(janovaTheme);

render(
  <MuiThemeProvider theme={janovaTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
