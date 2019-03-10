import React from "react";
import PropTypes from "prop-types";
import plowimage from "./plowimage.png";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { RSA_NO_PADDING } from "constants";

const styles = theme => ({
  root: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Avenir"
  },
  text1: {
    color: theme.palette.common.white,
    display: "inline-flex",
    fontSize: "100px",
    fontWeight: "bold",
    fontFamily: "Avenir",
    paddingTop: "50px"
  },
  text2: {
    color: theme.palette.common.white,
    display: "inline-flex",
    fontSize: "32px",
    fontWeight: "bold",
    fontFamily: "Avenir",
    paddingTop: "60px",
    paddingBottom: "50px"
  },
  img: {
    width: "600px",
    display: "inline-flex",
    paddingTop: "60px"
  }
});

const Intro = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.text1}>PlowPath</Typography>
      <img className={classes.img} src={plowimage} alt="" />
      <Typography className={classes.text2}>
        Make sure there's a safe route for you.
      </Typography>
    </div>
  );
};

Intro.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Intro);
