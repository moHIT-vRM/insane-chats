import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import Chat from "./Chat";
import Conversation from "../../components/Conversation";
import { LIGHT } from "../../config";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack flexDirection={"row"} width={"100%"}>
      {/* Chat Section */}
      <Chat />
      <Stack
        height={"100%"}
        // width={"calc(100vw-740px)"}
        // sx={{width :'calc(100vw-740px)' , height:"100%"}} 
        width={"100%"}    
        backgroundColor={theme.palette.mode=== LIGHT? '#F0F4FA': theme.palette.background.paper}   
      >
        {/* Conversation Section */}
        <Conversation />
      </Stack>
      <Contact/>
    </Stack>
  );
};

export default GeneralApp;
