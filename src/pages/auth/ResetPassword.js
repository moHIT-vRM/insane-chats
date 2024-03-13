import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <Stack spacing={3} mb={5} position={"relative"}>
      <Typography variant="h3" paragraph>
        Forgot Your Password
      </Typography>
      <Typography color="text.secondary" mb={5}>
        {" "}
        Please enter the email address associated with your account and we will
        email you a link to reset you password.
      </Typography>
      {/* Reset Password Form  */}
      <ResetPasswordForm />
      <Link
        component={RouterLink}
        to={"/auth/login"}
        color={"inherit"}
        variant="subtitle2"
        sx={{ mt: 3, mx: "auto", display: "inline-flex", alignItems: "center" }}
      >
        {" "}
        <CaretLeft size={20} />
        Return to the sign in
      </Link>
    </Stack>
  );
};

export default ResetPassword;
