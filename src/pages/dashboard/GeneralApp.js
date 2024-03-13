import { Box, Stack, useTheme } from "@mui/material";
import React, { useCallback, useMemo } from "react";
import Chat from "./Chat";
import Conversation from "../../components/Conversation";
import { LIGHT, PanelType } from "../../config";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
  const theme = useTheme();
  const { sideBar } = useSelector((store) => store.app);

  const handleTabPanel = useCallback(() => {
    switch (sideBar.type) {
      case PanelType.CONTACT:
        return <Contact />;
      case PanelType.STARRED:
        return <StarredMessages />;
      case PanelType.SHARED:
        return <SharedMessages />;
      default:
        break;
    }
  }, [sideBar.type]);

  return (
    <Stack flexDirection={"row"} width={"100%"}>
      {/* Chat Section */}
      <Chat />
      <Stack
        height={"100%"}
        // width={sideBar.open ? "calc( 100vw - 740px )" : "calc( 100vw - 180px )"}
        width={'100%'}
        backgroundColor={
          theme.palette.mode === LIGHT
            ? "#F0F4FA"
            : theme.palette.background.paper
        }
      >
        {/* Conversation Section */}
        <Conversation />
      </Stack>
      {sideBar.open && handleTabPanel()}
    </Stack>
  );
};

export default GeneralApp;
