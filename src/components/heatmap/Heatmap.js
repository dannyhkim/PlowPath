import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { statuses, streets } from "../../constants/Constants";
import {getRandomInt} from '../utils/utils'

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of_type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  cell1: {
    backgroundColor: "red"
  },
  cell2: {
    backgroundColor: "yellow"
  }
});

const colors = [
  "#ef9a9a",
  "#fff59d",
  "#a5d6a7"
];

function Heatmap({ classes }) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Street Names</TableCell>
            {statuses.map(status => {
              return <TableCell key={status.id}>{status.name}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {streets.map((street, index) => {
            return (
              <TableRow key={street.id}>
                <TableCell>{street.name}</TableCell>
                <TableCell
                  style={{ backgroundColor: colors[getRandomInt(3)]}}
                />
                <TableCell
                  style={{ backgroundColor: colors[getRandomInt(3)]}}
                />
                <TableCell
                  style={{ backgroundColor: colors[getRandomInt(3)]}}
                />
                <TableCell
                  style={{ backgroundColor: colors[getRandomInt(3)]}}
                />
                <TableCell
                  style={{ backgroundColor: colors[getRandomInt(3)]}}
                />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Heatmap.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Heatmap);
