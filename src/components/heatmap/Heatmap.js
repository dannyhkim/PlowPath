import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { statuses, streets, heatmapColors } from "../../constants/Constants";
import { getRandomInt } from "../../utils/utils";
import HeatmapDialog from "./HeatmapDialog";

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

const HeatmapCell = ({ classes, setOpen, open }) => {
  const randomInt = getRandomInt(heatmapColors.length);
  return (
    <TableCell
      onClick={() => {
        if (randomInt === 1) {
          setOpen(!open);
        }
      }}
      style={{
        backgroundColor: heatmapColors[randomInt]
      }}
    />
  );
};

const Heatmap = ({ classes }) => {
  const [open, setOpen] = useState(false);
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
          {streets.map(street => {
            return (
              <TableRow key={street.id}>
                <TableCell>{street.name}</TableCell>
                {statuses.map((status, index) => {
                  return (
                    <HeatmapCell
                      key={index}
                      classes={classes}
                      setOpen={setOpen}
                    />
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {open && <HeatmapDialog open={open} setOpen={setOpen} />}
    </Paper>
  );
};

Heatmap.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Heatmap);
