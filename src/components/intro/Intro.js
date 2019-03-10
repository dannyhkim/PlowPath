import React from "react";
import PropTypes from "prop-types";
import plowimage from "./plowimage.png";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  text: {
    color: theme.palette.common.white
  }
});

const Intro = ({ classes }) => {
  return (
    <div>
      <Typography className={classes.text}>PlowPath</Typography>
      <img src={plowimage} />
      <Typography className={classes.text}>
        Make sure there's a safe route for you.
      </Typography>
    </div>
  );
};

Intro.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Intro);
