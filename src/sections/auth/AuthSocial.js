import { Divider, IconButton, Stack } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitchLogo } from "phosphor-react";
import React from "react";

const AuthSocial = () => {
  return (
    <Stack>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack flexDirection={"row"} gap={2} justifyContent={"center"}>
        <IconButton>
          <GoogleLogo color={"#DF3E30"} />
        </IconButton>
        <IconButton>
          <GithubLogo />
        </IconButton>
        <IconButton>
          <TwitchLogo color={"#1c9CEA"} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default AuthSocial;
