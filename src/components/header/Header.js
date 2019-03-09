import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/es/Typography/Typography";
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: ''
});

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </IconButton>
        <Typography>
          Snow HeatMap
        </Typography>
        <div>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)