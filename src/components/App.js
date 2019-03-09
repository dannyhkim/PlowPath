import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Drawer from "./drawer/Drawer";
import Heatmap from "./heatmap/Heatmap";
import Maps from "./maps/Maps";
import Content from "./content/Content";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex"
  }
});

function App({ classes }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Header open={open} setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} />
      <Content>
        <Heatmap open={open} setOpen={setOpen} />
        <Maps open={open} setOpen={setOpen} />
      </Content>
    </div>
  );
}

export default withStyles(styles)(App);
