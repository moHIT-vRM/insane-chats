import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import { StyledBadge } from "./Custom/StyledBadge";
import { LIGHT } from "../config";

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
        <ListItemText
          primary={name}
          primaryTypographyProps={{ variant: "body2" }}
          secondary={msg}
        />
      </ListItem>
    </List>
  );
};

export default ChatElement;
