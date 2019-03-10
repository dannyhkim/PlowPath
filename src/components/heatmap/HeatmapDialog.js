import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";

const ResponsiveDialog = ({ fullScreen, open, setOpen }) => {
  const handleClickOpen = e => setOpen(true);
  const handleClose = e => setOpen(false);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Dispatch crew to street?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>This will send a notification to the dispatch crew to inspect the selected street</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

export default withMobileDialog()(ResponsiveDialog);
