import { FormControlLabel, FormGroup, Switch, styled } from "@mui/material";
import { DARK, LIGHT } from "../../config";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 45,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: theme.palette.common.white,
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === DARK
            ? theme.palette.info.main
            : theme.palette.info.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: theme.palette.success.main,
      border: `6px solid ${theme.palette.common.white}`,
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === LIGHT
          ? theme.palette.grey[500]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === LIGHT ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor:
      theme.palette.mode === LIGHT
        ? theme.palette.grey[500]
        : theme.palette.grey[700],
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export const CustomizedSwitches = ({ onChangeFunction, labelStyle }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label={labelStyle.label}
        labelPlacement={labelStyle.position}
        onChange={onChangeFunction}
      />
    </FormGroup>
  );
};
