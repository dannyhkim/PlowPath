import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  }
});

const statuses = [
  {
    id: 'wet',
    name: 'Wet'
  },
  {
    id: 'slippery',
    name: 'Wet'
  },
  {
    id: 'icy',
    name: 'Icy'
  },
  {
    id: 'wet',
    name: 'Wet'
  },
  {
    id: 'wet',
    name: 'Wet'
  },
];

const streets = [
  {
    id: "190-albany-road",
    name: "190 Albany Road"
  },
  {
    id: "accolade-east",
    name: "Accolade East"
  },
  {
    id: "accolade-west",
    name: "Accolade West"
  },
  {
    id: "atkinson",
    name: "Atkinson"
  },
  {
    id: "behavioral-science",
    name: "Behavioral Science"
  }
];

function Heatmap({ classes }) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          {statuses.map(status => {
            return (
              <TableRow>
                <TableCell>
                  {status.name}
                </TableCell>
              </TableRow>
            )
          })}
        </TableHead>
        <TableBody>
          {streets.map(street => {
            return (
              <TableRow>
                <TableCell>{street.name}</TableCell>
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
