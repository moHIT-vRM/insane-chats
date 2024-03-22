import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { LIGHT, PanelType } from "../config";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSideBar, UpdateSidebar } from "../redux/slices/app";
import { StyledBadge } from "./Custom/StyledBadge";
import { faker } from "@faker-js/faker";
import { CustomizedSwitches } from "./Custom/StyledSwtich";
import ConfirmDialog from "./Custom/ConfirmDialog";

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [blockOpen, setBlockOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <Stack height={"100vh"} width={320} >
        <Stack height={"100%"}>
          {/* header */}
          <Stack
            boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
            width={"100%"}
            sx={{
              backgroundColor:
                theme.palette.mode === LIGHT
                  ? theme.palette.grey[50]
                  : theme.palette.background,
            }}
          >
            <Stack
              width={"100%"}
              flexDirection={"row"}
              p={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2">Contact Info</Typography>
              <IconButton onClick={() => dispatch(ToggleSideBar())}>
                <X />
              </IconButton>
            </Stack>
          </Stack>
          {/* Body */}
          <Stack
            height={"100%"}
            position={"relative"}
            flexGrow={1}
            overflowY={"scroll"}
            p={2}
            spacing={1.2}
          >
            <List
              width={"100%"}
              disablePadding
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              flexItem
            >
              <ListItem>
                <ListItemAvatar>
                  {true ? (
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar
                        src={faker.image.avatar()}
                        sx={{ width: 56, height: 56 }}
                      />
                    </StyledBadge>
                  ) : (
                    <Avatar src={faker.image.avatar()} sizes={78} />
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={"qwerty"}
                  primaryTypographyProps={{ variant: "body2" }}
                  secondary={"qwerty"}
                />
              </ListItem>
            </List>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Stack>
                <IconButton>
                  <VideoCamera />
                </IconButton>
                <Typography variant="overline">Audio</Typography>
              </Stack>
              <Stack>
                <IconButton>
                  <Phone />
                </IconButton>
                <Typography variant="overline">Voice</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack spacing={0.5}>
              <Typography variant="article">About</Typography>
              <Typography variant="body2">
                {" "}
                Imagination is the only limit
              </Typography>
            </Stack>
            <Divider />
            <List
              width={"100%"}
              disablePadding
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              flexItem
            >
              <ListItem
                secondaryAction={
                  <Button
                    onClick={() => dispatch(UpdateSidebar(PanelType.SHARED))}
                    endIcon={<CaretRight />}
                  >
                    {" "}
                    404
                  </Button>
                }
              >
                <ListItemText
                  primary={"Media, Links & Docs"}
                  primaryTypographyProps={{ variant: "subtitle2" }}
                />
              </ListItem>
            </List>
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
              mb={1}
            >
              {[1, 2, 3].map((el, i) => (
                <Box
                  component={"img"}
                  key={i}
                  src={faker.image.food()}
                  alt={faker.name.fullName()}
                  height={60}
                  width={70}
                />
              ))}
            </Stack>
            <Divider />
            <List
              width={"100%"}
              disablePadding
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              flexItem
            >
              <ListItem
                secondaryAction={
                  <IconButton
                    size="small"
                    onClick={() => dispatch(UpdateSidebar(PanelType.STARRED))}
                  >
                    <CaretRight />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Star />
                </ListItemAvatar>
                <ListItemText
                  primary={"Starred Messages"}
                  primaryTypographyProps={{ variant: "subtitle2" }}
                />
              </ListItem>
            </List>
            <Divider />
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack spacing={2} direction={"row"} alignItems={"center"}>
                <Bell />
                <Typography variant="subtitle2">Mute Notifications</Typography>
              </Stack>

              <CustomizedSwitches />
            </Stack>
            <Divider />
            <Typography>1 group in common</Typography>
            <List
              width={"100%"}
              disablePadding
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              flexItem
            >
              <ListItem>
                <ListItemAvatar>
                  {true ? (
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar src={faker.image.avatar()} />
                    </StyledBadge>
                  ) : (
                    <Avatar src={faker.image.avatar()} sizes={78} />
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={"qwerty"}
                  primaryTypographyProps={{ variant: "body2" }}
                  secondary={"qwerty"}
                />
              </ListItem>
            </List>
            <Stack direction={"row"} spacing={2}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Prohibit />}
                onClick={() => setBlockOpen(true)}
              >
                Block
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Trash />}
                onClick={() => setDeleteOpen(true)}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {blockOpen && (
        <ConfirmDialog
          open={blockOpen}
          title={"Block this Contact"}
          subTitle={"Are you sure you want to block this contact?"}
          handleConfirm={() => {}}
          handleClose={() => setBlockOpen(false)}
        />
      )}
      {deleteOpen && (
        <ConfirmDialog
          open={deleteOpen}
          title={"Delete this Contact"}
          subTitle={"Are you sure you want to delete this contact?"}
          handleConfirm={() => {}}
          handleClose={() => setDeleteOpen(false)}
        />
      )}
    </>
  );
};

export default Contact;
