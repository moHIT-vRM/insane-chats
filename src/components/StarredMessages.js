import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { LIGHT, PanelType } from "../config";
import { useDispatch } from "react-redux";
import { CaretLeft } from "phosphor-react";
import { UpdateSidebar } from "../redux/slices/app";
import Messages from "./Conversation/Messages";
import ScrollerStack from "./Custom/ScrollerStack";

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Stack width={320} height={"100vh"} border={'2px solid'}>
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

        <ScrollerStack p={2} spacing={3} flexGrow={1} height={"100%"}>
          <Messages />
        </ScrollerStack>
      </Stack>
    </Stack>
  );
};

export default StarredMessages;
