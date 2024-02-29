import { Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Messages = ({ menu = false }) => {
  return (
    <Stack padding={2}>
      <Stack spacing={2}>
        {Chat_History.map((item) => {
          switch (item.type) {
            case "divider":
              return <Timeline el={item} />;
            case "msg":
              switch (item.subtype) {
                case "img":
                  return <MediaMsg el={item} menu={menu} />;
                case "doc":
                  return <DocMsg el={item} />;
                case "link":
                  return <LinkMsg el={item} />;
                case "reply":
                  return <ReplyMsg el={item} />;
                default:
                  return <TextMsg el={item} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Stack>
  );
};

export default Messages;
