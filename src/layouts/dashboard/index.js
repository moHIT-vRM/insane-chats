import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CustomizedSwitches } from "../../components/Custom/StyledSwtich";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import logo from "../../assets/Images/logo.ico";
import useSettings from "../../hooks/useSettings";
import { LIGHT } from "../../config";

const SwitchLabel = { label: "Mode" };
const SwitchPosition = { position: "top" };

const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();

  return (
    <>
      <Stack
        width={100}
        py={2}
        height={"100vh"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        backgroundColor={theme.palette.background.paper}
        boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
      >
        <Stack flexDirection={"column"} gap={3} alignItems={"center"}>
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
                  onClick={() => setSelected(el.index)}
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
          <Divider />
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
              onClick={() => setSelected(3)}
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
          <Avatar src={faker.image.avatar()} alt="profileError" />
        </Stack>
      </Stack>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
