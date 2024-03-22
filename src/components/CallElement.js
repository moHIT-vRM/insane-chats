import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { LIGHT } from "../config";
import { StyledBadge } from "./Custom/StyledBadge";
import { faker } from "@faker-js/faker";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";

const CallLogElement = ({ online, name, incoming, missed }) => {
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
          <IconButton>
            <Phone color="green" size={20} />
          </IconButton>
        }
      >
        <ListItemAvatar>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
          )}
        </ListItemAvatar>
        <ListItemText
          primary={faker.name.fullName()}
          primaryTypographyProps={{ variant: "body2" }}
          secondary={
            <Stack flexDirection={"row"} alignItems="center" gap={1}>
              {incoming ? (
                <ArrowDownLeft size={16} color={missed ? "red" : "green"} />
              ) : (
                <ArrowUpRight size={16} color={missed ? "red" : "green"} />
              )}
              <Typography variant="subtitle2">Yestarday 21:23</Typography>
            </Stack>
          }
        />
      </ListItem>
    </List>
  );
};
const CallElement = () => {
  const theme = useTheme();
  return (
    <List
      width={"100%"}
      disablePadding
      sx={{
        borderRadius: 1,
        border: `1px solid ${theme.palette.grey[100]}`,
        backgroundColor:
          theme.palette.mode === LIGHT
            ? theme.palette.common.white
            : theme.palette.background.paper,
      }}
    >
      <ListItem
        secondaryAction={
          <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <IconButton>
              <Phone color="green" size={24} />
            </IconButton>
            <IconButton>
              <VideoCamera color="green" size={24} />
            </IconButton>
          </Stack>
        }
      >
        <ListItemAvatar>
          <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
        </ListItemAvatar>
        <ListItemText
          primary={faker.name.fullName()}
          primaryTypographyProps={{ variant: "body2" }}
          secondary={"Yestarday 21:23"}
        />
      </ListItem>
    </List>
  );
};

export { CallElement, CallLogElement };
