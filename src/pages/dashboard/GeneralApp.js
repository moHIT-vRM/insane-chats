import { Box, Button, Stack, useTheme } from "@mui/material";
import React, { useCallback, useMemo } from "react";
import Chat from "./Chat";
import Conversation from "../../components/Conversation";
import { LIGHT, PanelType } from "../../config";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
import { useDispatch } from "../../redux/store";
import { UpdateSidebar } from "../../redux/slices/app";

const GeneralApp = () => {
  const theme = useTheme();
  const { sideBar } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const handleTabPanel = useCallback(() => {
    switch (sideBar.type) {
      case PanelType.CONTACT:
        return <Contact />;
        // return <Stack  >
        //    <Button  onClick={() => dispatch(UpdateSidebar(PanelType.SHARED))}>tpp</Button>
        //    <Button     onClick={() => dispatch(UpdateSidebar(PanelType.STARRED))}>fpp</Button>
        // </Stack>;
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
        height={"100vh"}
        width={sideBar.open ? "calc( 90vw - 560px )" : "calc( 90vw - 240px )"}
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
