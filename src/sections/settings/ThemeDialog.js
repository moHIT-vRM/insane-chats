import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slide,
} from "@mui/material";
import React, { useState } from "react";
import { DARK, LIGHT } from "../../config";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ThemeDialog = ({ open, handleClose, handleApply }) => {
  const [value, setValue] = useState(LIGHT);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Dialog
      open={open}
      fullWidth
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value={LIGHT} control={<Radio />} label="Light" />
            <FormControlLabel value={DARK} control={<Radio />} label="Dark" />
            <FormControlLabel
              value={"default"}
              control={<Radio />}
              label="System Default"
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleApply}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ThemeDialog;
