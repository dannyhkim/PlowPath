import React from "react";
import PropTypes from "prop-types";
import plowimage from "./plowimage.png";
import green from "./green.png";
import yellow from "./yellow.png";
import red from "./red.png";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

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
  },
  legendtext: {
    color: theme.palette.common.white,
    display: "block",
    fontSize: "25px",
    fontWeight: "bold",
    fontFamily: "Avenir",
    paddingTop: "60px",
  },
  img: {
    width: "600px",
    display: "inline-flex",
    paddingTop: "60px"
  },
  legendimg: {
      width: "80px",
      display: "inline-flex",
      paddingTop: "20px",
      paddingRight: "40px"
  },
  legendsmall: {
      color: theme.palette.common.white,
      fontFamily: "Avenir",
      fontSize: "15px",
      fontWeight: "bold",
      display: "inline",
      paddingRight: "25px"
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
      <Typography className={classes.legendtext}>
          Legend
      </Typography>
      <div className={classes.root}>
      <img className={classes.legendimg} src={green} alt=""/>
      <img className={classes.legendimg} src={yellow} alt=""/>
      <img className={classes.legendimg} src={red} alt=""/>
      </div>
      <Typography className={classes.legendsmall}>
        Clear
      </Typography>
      <Typography className={classes.legendsmall}>
        Caution
      </Typography>
      <Typography className={classes.legendsmall}>
        Dangerous
      </Typography>
    </div>
  );
};

Intro.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Intro);
