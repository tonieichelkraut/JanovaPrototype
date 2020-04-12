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
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import RemoveIcon from "@material-ui/icons/Remove";

const columns = [
  { id: "change", label: "", minWidth: 20 },
  { id: "rank", label: "Rang", minWidth: 20, align: "center" },
  { id: "avatar", label: "", minWidth: 20 },
  { id: "name", label: "Spieler", minWidth: 20 },
  { id: "elo", label: "ELO", minWidth: 20, align: "right" }
];

function createData(change, rank, avatar, name, elo) {
  return { change, rank, avatar, name, elo };
}

const rows = [
  createData(
    <RemoveIcon color="disabled" />,
    1,
    <Avatar alt="Denise Husung" src="/Images/denise_husung.jpg" />,
    "Denise Husung",
    1322
  ),
  createData(
    <RemoveIcon color="disabled" />,
    2,
    <Avatar alt="Heidi Hildebrand" src="/Images/heidi_hildebrand.jpg" />,
    "Heidi Hildebrand",
    1299
  ),
  createData(
    <ArrowDropUpIcon color="primary" />,
    3,
    <Avatar alt="Heidi Hildebrand" src="/Images/oliver_wieland.jpg" />,
    "Oliver Wieland",
    1251
  ),
  createData(
    <ArrowDropDownIcon color="disabled" />,
    4,
    <Avatar alt="Friedrich Kastner" src="/Images/friedrich_kaestner.jpg" />,
    "Friedrich Kästner",
    1234
  ),
  createData(
    <ArrowDropUpIcon color="primary" />,
    5,
    <Avatar alt="Simon Stützer" src="/Images/simon_stuetzer.jpg" />,
    "Simon Stützer",
    1230
  ),
  createData(
    <ArrowDropUpIcon color="primary" />,
    6,
    <Avatar alt="Fabian Günzel" src="/Images/fabian_guenzel.jpg" />,
    "Fabian Günzel",
    1220
  ),
  createData(
    <ArrowDropDownIcon color="disabled" />,
    7,
    <Avatar alt="Niklas Tuator" src="/Images/niklas_tautor.jpg" />,
    "Niklas Tautor",
    1219
  ),
  createData(
    <RemoveIcon color="disabled" />,
    8,
    <Avatar alt="Lennard Meyer" src="/Images/lennard_mayer.jpg" />,
    "Lennard Meyer",
    1215
  ),
  createData(
    <RemoveIcon color="disabled" />,
    9,
    <Avatar alt="Michael Günzel" src="/Images/michael_guenzel.jpg" />,
    "Michael Günzel",
    1210
  ),
  createData(
    <ArrowDropDownIcon color="disabled" />,
    10,
    <Avatar alt="Cornelius Frank" src="/Images/cornelius_frank.jpg" />,
    "Cornelius Frank",
    1203
  ),
  createData(
    <RemoveIcon color="disabled" />,
    11,
    <Avatar alt="Kira Petrowsky" src="/Images/kira_petrowsky.jpg" />,
    "Kira Petrowsky",
    1202
  ),
  createData(
    <ArrowDropUpIcon color="primary" />,
    12,
    <Avatar alt="Hannah Hildebrand" src="/Images/hannah_hildebrand.jpg" />,
    "Hannah Hildebrand",
    1201
  ),
  createData(
    <ArrowDropDownIcon color="disabled" />,
    13,
    <Avatar alt="Lara Sachse" src="/Images/lara_sachse.jpg" />,
    "Lara Sachse",
    1197
  ),
  createData(
    <ArrowDropDownIcon color="disabled" />,
    14,
    <Avatar alt="Tamino Zeuch" src="/Images/tamino_zeuch.jpg" />,
    "Tamino Zeuch",
    1193
  ),
  createData(
    <ArrowDropUpIcon color="primary" />,
    15,
    <Avatar alt="Jacob Zenge" src="/Images/jacob_zenge.jpg" />,
    "Jacob Zenge",
    1192
  ),
  createData(
    <RemoveIcon color="disabled" />,
    16,
    <Avatar alt="Max Bodewald" src="/Images/max_bodewald.jpg" />,
    "Max Bodewald",
    1190
  ),
  createData(
    <RemoveIcon color="disabled" />,
    17,
    <Avatar alt="Lutz Lindau" src="/Images/lutz_lindau.jpg" />,
    "Lutz Lindau",
    1180
  )
];

function isEven(value) {
  return value % 2 === 0;
}

const useStyles = makeStyles(janovaStyle);

export default function StickyHeadTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.tableRoot}>
      <TableContainer className={classes.tableContainer}>
        <Table
          className={classes.ranking}
          stickyHeader
          size="small"
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow
                  hover
                  className={
                    isEven(row.rank) ? classes.evenRow : classes.oddRow
                  }
                  role="checkbox"
                  tabIndex={-1}
                  key={row.rank}
                >
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        align={column.align}
                        className={`${column.id} ${classes.tableCell} ${
                          column.id === "rank" ? classes.rank : ""
                        } ${column.id === "elo" ? classes.elo : ""}`}
                        style={{ minWidth: column.minWidth }}
                        key={column.id}
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
