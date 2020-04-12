import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "./Avatar";
import Typography from "@material-ui/core/Typography";
import { janovaStyle } from "./JanovaStyles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(janovaStyle);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.rootProfileTopColumns}>
      <Grid container spacing={0}>
        {" "}
        {/* war mal spacing={2 } */}
        <Grid item xs>
          <Avatar />
        </Grid>
        <Grid item xs>
          <Container>
            <Typography
              variant="h6"
              className={`${classes.profileInfoText} ${
                classes.profileInfoHeading
              }`}
            >
              ELO
            </Typography>
            <Typography
              variant="h6"
              className={`${classes.profileInfoText} ${
                classes.profileInfoValue
              }`}
            >
              1230
            </Typography>
          </Container>
        </Grid>
        <Grid item xs>
          <Container>
            <Typography
              variant="h6"
              className={`${classes.profileInfoText} ${
                classes.profileInfoHeading
              }`}
            >
              MATCHES
            </Typography>
            <Typography
              variant="h6"
              className={`${classes.profileInfoText} ${
                classes.profileInfoValue
              }`}
            >
              31
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
