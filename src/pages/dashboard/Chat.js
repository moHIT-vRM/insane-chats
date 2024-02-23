import {
  Avatar,
  Badge,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  FunnelSimple,
  MagnifyingGlass,
} from "phosphor-react";
import React from "react";
import { StyledBadge } from "../../components/Custom/StyledBadge";
import { ChatList } from "../../data";
import { LIGHT } from "../../config";
import { faker } from "@faker-js/faker";
import { SimpleBarStyle } from "../../components/Scrollbar";

const ChatElement = ({ img, name, msg, time, unread, pinned, online }) => {
  const theme = useTheme();
  return (
    <List
      width={"100%"}
      disablePadding
      sx={{
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === LIGHT
            ? theme.palette.common.white
            : theme.palette.background.paper,
      }}
    >
      <ListItem
        secondaryAction={
          <Stack
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            gap={1.6}
            paddingBottom={"8px"}
          >
            <Typography variant="caption">{time}</Typography>
            <Badge color="secondary" badgeContent={unread} variant="standard" />
          </Stack>
        }
      >
        <ListItemAvatar>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
        </ListItemAvatar>
        <ListItemText primary={name} primaryTypographyProps={{variant:"body2"}} secondary={msg} />
      </ListItem>
    </List>
  );
};

const Chat = () => {
  const theme = useTheme();
  return (
    <Stack
      position={"relative"}
      width={300}
      height={"100vh"}
      backgroundColor={
        theme.palette.mode === LIGHT
          ? theme.palette.grey[50]
          : theme.palette.background.default
      }
      boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
      gap={1}
      p={2}
    >
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>Chats</Typography>
        <IconButton>
          <CircleDashed />
        </IconButton>
      </Stack>
      <TextField
        id="search"
        placeholder="Search"
        InputProps={{
          disableUnderline:true,
          startAdornment: (
            <InputAdornment position="start">
              <MagnifyingGlass size={16} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <FunnelSimple size={16} />
            </InputAdornment>
          ),
        }}
      />
      <Button
        startIcon={<ArchiveBox />}
        variant="text"
        color="secondary"
        sx={{ justifyContent: "flex-start" }}
      >
        {" "}
        Archived{" "}
      </Button>
      <Divider width={"100%"} />
      <Stack
        height={"100%"}
        flexGrow={1}
        spacing={1.5}
        flexDirection={"column"}
        sx={{
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <Typography
            variant="subtitle2"
            sx={{ margin: "8px 0px" }}
            color={theme.palette.grey[150]}
          >
            Pinned
          </Typography>
          <Stack flexDirection={"column"} spacing={1}>
            {ChatList.filter((el) => el.pinned).map((el) => (
              <ChatElement key={el.id} {...el} />
            ))}
          </Stack>

          <Typography
            variant="subtitle2"
            color={theme.palette.grey[150]}
            sx={{ margin: "8px 0px" }}
          >
            All Chats
          </Typography>
          <Stack flexDirection={"column"} spacing={1}>
            {ChatList.filter((el) => !el.pinned).map((el) => (
              <ChatElement key={el.id} {...el} />
            ))}
          </Stack>
        </SimpleBarStyle>
      </Stack>
    </Stack>
  );
};

export default Chat;
