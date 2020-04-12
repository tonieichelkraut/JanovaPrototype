import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { janovaStyle } from "./JanovaStyles";

const useStyles = makeStyles(janovaStyle);

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    /*Lass mich das mal machen :) viel spaß! https://material-ui.com/guides/composition/#link*/
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.bottomNavigation}
      showLabels
    >
      <BottomNavigationAction label="Feed" value="feed" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Suche"
        value="search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Track"
        value="track"
        icon={<AddCircleOutlineIcon />}
      />
      <BottomNavigationAction
        label="Aktivität"
        value="activity"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Profil"
        value="profil"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
