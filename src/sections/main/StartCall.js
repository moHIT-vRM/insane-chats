import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CallElement } from "../../components/CallElement";
import { XSquare } from "phosphor-react";
import { MemeberLists } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
      maxWidth={"sm"}
    >
      <Stack position={"relative"} px={4} pt={3}>
        <Typography variant="h4">Start Call</Typography>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: "20px", right: "16px" }}
        >
          <XSquare />
        </IconButton>
      </Stack>
      <Stack p={3} spacing={1.5}>
        <TextField variant="outlined" id="outlined-basic" label="Start Call" />
        {MemeberLists?.map((el) => (
          <CallElement key={el.id} {...el} />
        ))}
      </Stack>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default StartCall;
