import { Stack, useTheme } from "@mui/material";
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import Messages from "./Messages";

const Conversation = () => {
  return (
    <Stack width={"auto"} height={"100%"} maxHeight={"100vh"}>
      {/* Chat Header */}
      <ChatHeader />

      {/* Conversation section */}
      <Stack
        flexGrow={1}
        width={"100%"}
        height={"100%"}
        sx={{
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Messages menu={true} />
      </Stack>
      {/* Chat Footer */}
      <ChatFooter />
    </Stack>
  );
};

export default Conversation;
