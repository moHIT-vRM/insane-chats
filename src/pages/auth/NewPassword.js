import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

const NewPassword = () => {
  return (
    <Stack spacing={3} mb={5} position={"relative"}>
      <Typography variant="h3" paragraph>
        Reset Password
      </Typography>
      <Typography color="text.secondary" mb={5}>
        Please set your password
      </Typography>
      {/* NewPassword Form */}

      <NewPasswordForm />
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

export default NewPassword;
