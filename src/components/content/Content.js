import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginLeft: "20%",
    marginRight: "20%"
  }
});

const Content = ({ classes, children }) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  );
};

Content.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node
};

export default withStyles(styles)(Content);
