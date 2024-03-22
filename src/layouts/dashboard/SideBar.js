import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { CustomizedSwitches } from "../../components/Custom/StyledSwtich";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import logo from "../../assets/Images/logo.ico";
import useSettings from "../../hooks/useSettings";
import { LIGHT } from "../../config";
import { useNavigate } from "react-router-dom";

const SwitchLabel = { label: "Mode" };
const SwitchPosition = { position: "top" };

const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      width={100}
      py={2}
      height={"100vh"}
      backgroundColor={theme.palette.background.paper}
      boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
    >
      <Stack
        flexDirection={"column"}
        gap={3}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Stack gap={2} alignItems={"center"}>
          <Avatar
            src={logo}
            alt="profileError"
            sx={{
              bgcolor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 4,
            }}
            variant="rounded"
          />
          <Stack gap={2} width={"max-content"}>
            {Nav_Buttons?.map((el) =>
              el.index === selected ? (
                <Stack
                  key={el.index}
                  backgroundColor={theme.palette.info.main}
                  borderRadius={1.5}
                >
                  <IconButton
                    width={"max-content"}
                    sx={{ color: theme.palette.common.white }}
                  >
                    {el.icon}
                  </IconButton>
                </Stack>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                    navigate(el.link);
                  }}
                  width={"max-content"}
                  key={el.index}
                  sx={{
                    color:
                      theme.palette.mode === LIGHT
                        ? theme.palette.common.black
                        : theme.palette.common.white,
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
          </Stack>
          <Divider width={48} />
          {selected === 3 ? (
            <Stack backgroundColor={theme.palette.info.main} borderRadius={1.5}>
              <IconButton
                width={"max-content"}
                sx={{ color: theme.palette.common.white }}
              >
                <Gear />
              </IconButton>
            </Stack>
          ) : (
            <IconButton
              onClick={() => {
                setSelected(3);
                navigate("/settings");
              }}
              width={"max-content"}
              sx={{
                color:
                  theme.palette.mode === LIGHT
                    ? theme.palette.common.black
                    : theme.palette.common.white,
              }}
            >
              <Gear />
            </IconButton>
          )}
        </Stack>
        <Stack flexDirection={"column"} gap={2} alignItems={"center"}>
          <CustomizedSwitches
            onChangeFunction={() => onToggleMode()}
            labelStyle={Object.assign(SwitchLabel, SwitchPosition)}
          />
          <IconButton
            disableRipple
            onClick={handleClick}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src={faker.image.avatar()} alt="profileError" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack>
              {Profile_Menu?.map((el, index) => (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate(el.link);
                  }}
                  key={index}
                >
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={100}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
