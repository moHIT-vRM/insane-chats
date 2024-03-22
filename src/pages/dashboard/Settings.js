import {
  Avatar,
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
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
import React, { useMemo, useState } from "react";
import ScrollerStack from "../../components/Custom/ScrollerStack";
import { LIGHT } from "../../config";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  PaintRoller,
  Receipt,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import ThemeDialog from "../../sections/settings/ThemeDialog";
import Shortcuts from "../../sections/settings/Shortcuts";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const [themeDialog, setThemeDialog] = useState(false);
  const [keyboardDialog, setKeyboardDialog] = useState(false);

  const settingsList = useMemo(
    () => [
      { label: "Notifications", icon: <Bell size={20} />, click: "" },
      { label: "Privacy", icon: <Lock size={20} />, click: "" },
      { label: "Security", icon: <Key size={20} />, click: "" },
      {
        label: "Theme",
        icon: <PaintRoller size={20} />,
        click: () => {
          setThemeDialog(true);
        },
      },
      { label: "Chat Wallpaper", icon: <Image size={20} />, click: "" },
      { label: "Request Account Info", icon: <Receipt size={20} />, click: "" },
      {
        label: "Keyboard Shortcuts",
        icon: <Keyboard size={20} />,
        click: () => {
          setKeyboardDialog(true);
        },
      },
      { label: "Help", icon: <Info size={20} />, click: "" },
    ],
    []
  );

  return (
    <>
      <Stack flexDirection={"row"} width={"100%"}>
        {/* Left Section */}

        <ScrollerStack
          flexDirection={"column"}
          spacing={2}
          width={320}
          padding={2}
          sxProps={{
            backgroundColor:
              theme.palette.mode === LIGHT
                ? theme.palette.grey["50"]
                : theme.palette.background,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={6}>
            <IconButton onClick={() => navigate("/app")}>
              <CaretLeft size={24} />
            </IconButton>
            <Typography variant="h4"> Settings</Typography>
          </Stack>

          <List width={"100%"} disablePadding flexItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  src={faker.image.avatar()}
                  sx={{ height: 60, width: 60 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={"qwerty"}
                primaryTypographyProps={{ variant: "body2" }}
                secondary={"qwerty"}
              />
            </ListItem>
          </List>
          {settingsList.map((el, index) => (
            <Card key={index} onClick={el.click}>
              <CardActionArea>
                <CardContent>
                  <Stack gap={2} flexDirection={"row"} alignItems={"center"}>
                    {el.icon}
                    <Typography variant="body2">{el.label}</Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </ScrollerStack>

        {/* Right Section */}
        <Stack width={"calc( 90vw - 260px)"} >
          Right Area okay
        </Stack>
      </Stack>
      {themeDialog && (
        <ThemeDialog
          open={themeDialog}
          handleClose={() => setThemeDialog(false)}
          handleApply={() => {}}
        />
      )}
      {keyboardDialog && (
        <Shortcuts
          open={keyboardDialog}
          handleClose={() => setKeyboardDialog(false)}
        />
      )}
    </>
  );
};

export default Settings;
