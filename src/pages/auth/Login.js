import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <Stack spacing={2} mb={5} position={"relative"}>
      <Typography variant="h4"> Login to Me</Typography>

      <Stack flexDirection={"row"} gap={0.5} alignItems={"center"}>
        <Typography variant="body2">New User?</Typography>
        <Link to="/auth/register" component={RouterLink} variant="subtitle2">
          {" "}
          Create an account
        </Link>
      </Stack>
      {/* Login Form */}
      <LoginForm />
      {/* Auth Social */}
      <AuthSocial />
    </Stack>
  );
};

export default Login;
