import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { LIGHT } from "../../config";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
  const theme = useTheme();
  return (
    <Stack flexDirection={"row"} width={"100%"}>
      {/* Left Section */}
      <Stack
        height={"100vh"}
        backgroundColor={
          theme.palette.mode === LIGHT
            ? theme.palette.grey[50]
            : theme.palette.background.default
        }
        width={320}
        boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
      >
        <Stack maxHeight={"100vh"} spacing={2} p={2}>
          <Stack alignItems={"center"} gap={4} flexDirection={"row"}>
            <IconButton>
              <CaretLeft />
            </IconButton>
            <Typography variant="h4">Profile</Typography>
          </Stack>
          <ProfileForm />
        </Stack>
      </Stack>
      {/* Right Section */}
      <Stack></Stack>
    </Stack>
  );
};

export default Profile;
