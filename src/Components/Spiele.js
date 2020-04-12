import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { janovaStyle } from "./JanovaStyles";
import Avatar from "@material-ui/core/Avatar";

const columns = [
  { id: "avatar", label: "", minWidth: 20 },
  { id: "name", label: "letzte Spiele", minWidth: 20 },
  { id: "timestamp", label: "", minWidth: 20 },
  { id: "elo", label: "Ergebnis", minWidth: 20, align: "right" }
];

function createData(avatar, name, timestamp, elo) {
  return { avatar, name, timestamp, elo };
}

const rows = [
  createData(
    <Avatar alt="Vincent Kazuch" src="/Images/vincent_kazuch.jpg" />,
    "Vincent Kazuch",
    "vor 2 Stunden",
    "3:0"
  ),
  createData(
    <Avatar alt="Lilian Nicodemus" src="/Images/lilian_nicodemus.jpg" />,
    "Lilian Nicodemus",
    "gestern",
    "3:1"
  ),
  createData(
    <Avatar alt="Denise Husung" src="/Images/denise_husung.jpg" />,
    "Denise Husung",
    "vor 6 Tagen",
    "2:3"
  ),
  createData(
    <Avatar alt="Jacob Zenge" src="/Images/jacob_zenge.jpg" />,
    "Jacob Zenge",
    "vor 2 Wochen",
    "gewonnen"
  ),
  createData(
    <Avatar alt="Lutz Lindau" src="/Images/lutz_lindau.jpg" />,
    "Lutz Lindau",
    "vor 3 Wochen",
    "gewonnen"
  )
];

const useStyles = makeStyles(janovaStyle);

export default function StickyHeadTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.tableRoot}>
      <TableContainer className="lastGames">
        <Table
          className="ranking"
          stickyHeader
          size="small"
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        className={column.id}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
