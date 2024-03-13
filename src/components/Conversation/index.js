import { Stack, useTheme } from "@mui/material";
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import Messages from "./Messages";
import ScrollerStack from "../Custom/ScrollerStack";

const Conversation = () => {
  return (
    <Stack width={"auto"} height={"100%"} maxHeight={"100vh"}>
      {/* Chat Header */}
      <ChatHeader />

      {/* Conversation section */}
      <ScrollerStack flexGrow={1} width={"100%"} height={"100%"}>
        <Messages menu={true} />
      </ScrollerStack>

      {/* Chat Footer */}
      <ChatFooter />
    </Stack>
  );
};

export default Conversation;
