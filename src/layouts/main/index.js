import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";

const MainLayout = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Stack spacing={5}>
        <Stack flexDirection={"column"} alignItems={"center"} width={"100%"}>
          <Box
            component={"img"}
            src={Logo}
            alt={"error"}
            sx={{ height: 120, width: 120 }}
          />
        </Stack>
      </Stack>
      <Outlet />
    </Container>
  );
};

export default MainLayout;
