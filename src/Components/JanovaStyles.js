export const janovaStyle = theme => ({
  titleContainer: {
    justifyContent: "center",
    backgroundColor: theme.palette.grey[100]
  },
  titleName: {
    color: theme.palette.text.primary
  },
  rootProfileTopColumns: {
    flexGrow: 1
  },
  profileInfoText: {
    textAlign: "center",
    fontWeight: "bold"
  },
  profileInfoHeading: { color: theme.palette.primary[500] },
  profileInfoValue: { color: theme.palette.grey[700] },
  rootAvatar: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  largeAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.primary[500]
  },
  profileTabs: {
    background: theme.palette.grey[100]
  },
  leftProfileTab: {
    marginRight: theme.spacing(1)
  },
  rightProfileTab: {
    marginLeft: theme.spacing(1)
  },
  bottomNavigation: {
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0
  },
  tableRoot: {
    marginTop: theme.spacing(1),
    width: "100%"
  },
  tableContainer: {
    maxHeight: 600
  },
  rank: {
    fontSize: "medium",
    textAlign: "center",
    fontWeight: "bold",
    color: theme.palette.primary[500]
  },
  elo: {
    fontSize: "medium",
    textAlign: "right",
    color: theme.palette.primary[500]
  },
  tableCell: {
    padding: theme.spacing(1)
  },
  evenRow: {
    background: theme.palette.grey[50]
  },
  oddRow: {}
});
