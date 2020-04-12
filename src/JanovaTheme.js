import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const janovaTheme = createMuiTheme({
  palette: {
    primary: { 500: "#0F54F0" }, // custom color in hex
    error: blue
  },
  typography: {
    fontFamily: [
      "montserrat",
      "sans-serif"
      /*
      "-apple-system", // Safari auf OS X oder iOS (San Francisco)
      "BlinkMacSystemFont", // Chrome < 56 auf OS X (San Francisco)
      '"Segoe UI"', // Windows
      "Roboto", // Android
      '"Helvetica Neue"', // Fallback
      "Arial", // Fallback (Windows)
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
      */
    ].join(",")
  },
  overrides: {
    MuiContainer: {
      root: {
        marginBottom: 56 /*To do: Frage klären,
                          ob das hier eine Variable sein sollte,
                          da es die Höhe der Bottom Navigation sein soll!*/
      }
    }
  }
});
