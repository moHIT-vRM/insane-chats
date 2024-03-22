import { useTheme } from "@emotion/react";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  DotsThreeVertical,
  Download,
  DownloadSimple,
  Image,
} from "phosphor-react";
import React, { useState } from "react";
import { Message_options } from "../../data";

const MsgLayout = ({ el, menu, children }) => {
  const theme = useTheme();
  return (
    <Stack
      flexDirection={"row"}
    
      alignItems={"start"}
      justifyContent={el?.incoming ? "flex-start" : "flex-end"}
    >
      <Stack
        p={1.5}
        borderRadius={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
        width={"max-content"}
      >
        {children}{" "}
      </Stack>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const DocMsg = ({ el, menu = false }) => {
  const theme = useTheme();
  return (
    <MsgLayout el={el} menu={menu} >
      <Stack gap={1} >
        <Stack
          padding={1}
          width={'100%'}
          flexDirection={"row"}
          gap={4.5}
          alignItems={"center"}
          borderRadius={1}
          sx={{ backgroundColor: theme.palette.background.paper }}
        >
          <Image size={48} />
          <Typography variant="caption">Abstract.png</Typography>
          <IconButton>
            <DownloadSimple />
          </IconButton>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            color: el?.incoming
              ? theme.palette.text
              : theme.palette.common.white,
          }}
        >
          {el.message}
        </Typography>
      </Stack>
    </MsgLayout>
  );
};

const LinkMsg = ({ el, menu = false }) => {
  const theme = useTheme();
  return (
    <MsgLayout el={el} menu={menu}>
      <Stack spacing={2}>
        <Stack
          p={2}
          spacing={3}
          alignItems={"start"}
          borderRadius={1}
          sx={{ backgroundColor: theme.palette.background.paper }}
        >
          <Box
            component={"img"}
            src={el.preview}
            alt={el.message}
            maxHeight={210}
            borderRadius={1}
          />
          <Stack spacing={2}>
            <Typography variant="subtitle2"> Creating Chat App</Typography>
            <Typography
              variant="subtitle2"
              color={theme.palette.primary.main}
              component={Link}
              to={"//hTtps://www.youtube.com"}
            >
              {" "}
              www.youtube.com
            </Typography>
            <Typography
              variant="body2"
              color={
                el?.incoming ? theme.palette.text : theme.palette.common.white
              }
            >
              {el.message}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </MsgLayout>
  );
};

const ReplyMsg = ({ el, menu = false }) => {
  const theme = useTheme();
  return (
    <MsgLayout el={el} menu={menu}>
      <Stack spacing={2}>
        <Stack
          p={2}
          flexDirection={"column"}
          spacing={3}
          alignItems={"center"}
          borderRadius={1}
          sx={{ backgroundColor: theme.palette.background.paper }}
        >
          <Typography variant="body2" color={theme.palette.text}>
            {el?.message}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          color={el?.incoming ? theme.palette.text : theme.palette.common.white}
        >
          {el.reply}
        </Typography>
      </Stack>
    </MsgLayout>
  );
};

const MediaMsg = ({ el, menu = false }) => {
  const theme = useTheme();
  return (
    <MsgLayout el={el} menu={menu}>
      <Stack spacing={1}>
        <Box
          component="img"
          src={el?.img}
          alt={el?.message}
          maxHeight={218}
          borderRadius={1}
        />
        <Typography
          variant="body2"
          color={el?.incoming ? theme.palette.text : theme.palette.common.white}
        >
          {el.message}
        </Typography>
      </Stack>
    </MsgLayout>
  );
};

const TextMsg = ({ el, menu = false }) => {
  const theme = useTheme();
  return (
    <MsgLayout el={el} menu={menu}>
      <Typography
        variant="body2"
        color={el.incoming ? theme.palette.text : theme.palette.common.white}
      >
        {el.message}
      </Typography>
    </MsgLayout>
  );
};
const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        disableRipple
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <DotsThreeVertical />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack>
          {Message_options?.map((el, index) => (
            <MenuItem onClick={handleClose} key={index}>
              {el.title}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
    >
      <Divider width={"46%"}></Divider>
      <Typography variant="caption" color={theme.palette.text}>
        {el.text}
      </Typography>
      <Divider width={"46%"}></Divider>
    </Stack>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
