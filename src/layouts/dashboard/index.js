import { Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const isAuthenticated = false;

const DashboardLayout = () => {
  // if (!isAuthenticated) {
  //   return <Navigate to={"/auth/login"} />;
  // }
  return (
    <Stack flexDirection={"row"}>
      {/* SideBar Compo: */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
