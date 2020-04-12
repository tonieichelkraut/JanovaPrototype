import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Ranking from "./Ranking";
import Spiele from "./Spiele";
import { janovaStyle } from "./JanovaStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { blueGrey800, grey600 } from "material-ui/styles/colors";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box id={`full-width-tabbox-${index}`}>{children}</Box>
      )}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(janovaStyle);

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation="0">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            className={`${classes.profileTabs} ${classes.leftProfileTab}`}
            label="STATISTIK"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.profileTabs}
            label="SPIELE"
            {...a11yProps(1)}
          />
          <Tab
            className={`${classes.profileTabs} ${classes.rightProfileTab}`}
            label="RANKING"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
            <Box
              m="60px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box className="WinValue">4 Siege</Box>
              <Box className="LossValue">1 Niederlage</Box>
              <CircularProgress
                variant="static"
                value={100}
                color={grey600}
                size={200}
                className="jo-progress"
              />
              <CircularProgress
                variant="static"
                value={80}
                color="primary"
                size={200}
                className="jo-progress"
              />
              <div className="MatchesWonPercent">80%</div>
            </Box>
          </div>
          <div className="MatchPeriod">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
              size="small"
            >
              <Button>Alle</Button>
              <Button>Jahr</Button>
              <Button>Monat</Button>
              <Button>Woche</Button>
            </ButtonGroup>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Spiele />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Ranking />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
