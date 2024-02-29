import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ConfirmDialog = ({
  open,
  handleClose,
  title,
  subTitle = "",
  handleConfirm,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {subTitle && (
          <DialogContentText id="alert-dialog-slide-description">
            {subTitle}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
