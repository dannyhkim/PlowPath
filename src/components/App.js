import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Intro from "./intro/Intro";
import Header from "./header/Header";
import Drawer from "./drawer/Drawer";
import Heatmap from "./heatmap/Heatmap";
import Maps from "./maps/Maps";
import Content from "./content/Content";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    background: "#4da6ff"
  }
});

const App = ({ classes, backgroundColor }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root} style={{ backgroundColor: backgroundColor}}>
      <Header open={open} setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} />
      <Content>
        <Intro open={open} setOpen={setOpen} />
        <Heatmap open={open} setOpen={setOpen} />
        <Maps open={open} setOpen={setOpen} />
      </Content>
    </div>
  );
};

const mapStateToProps = ({ drawer }) => {
  return {
    backgroundColor: drawer.backgroundColor
  };
};

App.propTypes = {
  classes: PropTypes.object,
  backgroundColor: PropTypes.string
};

export default withStyles(styles)(connect(mapStateToProps)(App));
