import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../sections/auth/RegisterForm";

const Register = () => {
  return (
    <Stack spacing={2} mb={5} position={"relative"}>
      <Typography variant="h4"> Get Started With Insane Chatting</Typography>

      <Stack flexDirection={"row"} gap={0.5} alignItems={"center"}>
        <Typography variant="body2">Already have an account?</Typography>
        <Link to="/auth/login" component={RouterLink} variant="subtitle2">
          Sign In
        </Link>
      </Stack>
      {/* Register Form */}
      <RegisterForm />

      <Typography
        component={"div"}
        sx={{
          color: "text.secondary",
          mt: 3,
          typography: "caption",
          textAlign: "center",
        }}
      >
        {"By signining up, I agree to"}
        <Link
          underline="always"
          color="text.primary"
          to=""
          component={RouterLink}
        >
          Terms Of Service
        </Link>
        {" and "}
        <Link
          underline="always"
          color="text.primary"
          to=""
          component={RouterLink}
        >
          Privacy and Policy
        </Link>
      </Typography>
    </Stack>
  );
};

export default Register;
