import {
  Box,
  IconButton,
  Stack,
  Tab,
  Typography,
  useTheme,
  Tabs,
  Grid,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { LIGHT, PanelType } from "../config";
import { useDispatch } from "react-redux";
import { CaretLeft } from "phosphor-react";
import { ToggleSideBar, UpdateSidebar } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
import Messages from "./Conversation/Messages";

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Stack width={320} height={"100vh"}>
      <Stack height={"100%"}>
        {/* header */}
        <Stack
          boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
          width={"100%"}
          sx={{
            backgroundColor:
              theme.palette.mode === LIGHT
                ? theme.palette.grey[50]
                : theme.palette.background,
          }}
        >
          <Stack
            width={"100%"}
            flexDirection={"row"}
            p={2}
            alignItems={"center"}
          >
            <IconButton
              onClick={() => dispatch(UpdateSidebar(PanelType.CONTACT))}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Stack>
        {/* Body */}

        <Stack
          height={"100%"}
          position={"relative"}
          flexGrow={1}
          overflowY={"scroll"}
          p={2}
          spacing={3}
        >
          <Messages />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StarredMessages;
