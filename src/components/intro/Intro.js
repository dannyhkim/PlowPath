import React from "react";
import PropTypes from "prop-types";
import plowimage from "./images/plowimage.png";
import green from "./images/green.png";
import yellow from "./images/yellow.png";
import red from "./images/red.png";

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
    textAlign: "center",
    display: "block",
    fontSize: "25px",
    fontWeight: "bold",
    fontFamily: "Avenir",
    paddingTop: "60px",
    paddingBottom: "10px"
  },
  img: {
    width: "600px",
    display: "inline-flex",
    paddingTop: "60px"
  },
  legendimg: {
      width: "80px",
      display: "inline",
      alignItems: "center",
      padding: "10px 20px"
  },
  legendsmall: {
      color: theme.palette.common.white,
      fontFamily: "Avenir",
      fontSize: "15px",
      fontWeight: "bold",
      padding: "0",
      display: "block"
  },
  container: {
    display: "inline-block",
    padding: "0 10px"
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
        <div className={classes.container}>
        <img className={classes.legendimg} src={green} alt=""/>
        <Typography className={classes.legendsmall}>
          Clear
        </Typography>
        </div>
        <div className={classes.container}>
          <img className={classes.legendimg} src={yellow} alt=""/>
          <Typography className={classes.legendsmall}>
            Caution
          </Typography>
        </div>
        <div className={classes.container}>
          <img className={classes.legendimg} src={red} alt=""/>
          <Typography className={classes.legendsmall}>
            Dangerous
          </Typography>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Intro);
