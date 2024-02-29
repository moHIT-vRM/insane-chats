import {
  Avatar,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";
import { LIGHT } from "../../config";
import { StyledBadge } from "../Custom/StyledBadge";
import { faker } from "@faker-js/faker";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";

import { ToggleSideBar } from "../../redux/slices/app";
import { useDispatch } from "react-redux";

const ChatHeader = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Stack
      height={80}
      justifyContent={"center"}
      width={"100%"}
      backgroundColor={
        theme.palette.mode === LIGHT
          ? theme.palette.grey[50]
          : theme.palette.background.default
      }
      boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
    >
      <List
        width={"100%"}
        disablePadding
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor:
            theme.palette.mode === LIGHT
              ? theme.palette.common.white
              : theme.palette.background.default,
        }}
        flexItem
      >
        <ListItem
          secondaryAction={
            <Stack gap={2} flexDirection={"row"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <IconButton>
                <Phone />
              </IconButton>
              <IconButton>
                <MagnifyingGlass />
              </IconButton>
              <Divider orientation="vertical" flexItem />
              <IconButton>
                <CaretDown />
              </IconButton>
            </Stack>
          }
        >
          <IconButton disableTouchRipple sx={{padding: 0}} onClick={() => dispatch(ToggleSideBar())}>
            <ListItemAvatar  >
              {true ? (
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
            </IconButton>
         
          <ListItemText
            primary={"qwerty"}
            primaryTypographyProps={{ variant: "body2" }}
            secondary={"qwerty"}
          />
        </ListItem>
      </List>
    </Stack>
  );
};

export default ChatHeader;
