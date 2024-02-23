import {
  Box,
  Button,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { LIGHT } from "../../config";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOpenActions] = useState(false);
  return (
    <TextField
      id="message"
      fullWidth
      variant="filled"
      placeholder="Write a message"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack width={"max-content"}>
            <Stack position={"relative"} display={openActions ? "inline-block": "none"}>
              {Actions.map((el, index) => (
                <Tooltip title={el.title} placement={"right"} arrow key={index}>
                  <Fab
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="start">
              <IconButton onClick={()=> setOpenActions((prev)=> !prev)}>
                <LinkSimple size={24} />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setOpenPicker((prev) => !prev)}>
              <Smiley size={24} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatFooter = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);
  return (
    <Stack
      height={100}
      width={"100%"}
      flexDirection={"row"}
      px={3}
      alignItems={"center"}
      gap={2}
      backgroundColor={
        theme.palette.mode === LIGHT
          ? theme.palette.grey[50]
          : theme.palette.background.default
      }
      boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
    >
      <Stack width={"100%"}>
        <Box
          display={openPicker ? "inline" : "none"}
          zIndex={10}
          position={"fixed"}
          bottom={81}
          right={100}
        >
          <Picker
            data={data}
            theme={theme.palette.mode}
            onEmojiSelect={console.log}
          />
        </Box>
        <ChatInput setOpenPicker={setOpenPicker} />
      </Stack>
      <Button
        sx={{ height: "50%", backgroundColor: theme.palette.primary.main }}
      >
        <PaperPlaneTilt size={24} color={theme.palette.common.white} />
      </Button>
    </Stack>
  );
};

export default ChatFooter;
