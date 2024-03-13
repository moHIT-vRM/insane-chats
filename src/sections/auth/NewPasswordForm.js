import React, { useState } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { LIGHT } from "../../config";

const NewPasswordForm = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Password is Required")
      .min(6, "Password must be at least 6 characters")
      .max(16, "Max Limit Reached")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one symbol letter, and one number"
      ),
    confirmNewPassword: Yup.string()
      .required("Password is Required")
      .min(6, "Password must be at least 6 characters")
      .max(16, "Max Limit Reached")
      .oneOf([Yup.ref("newPassword"), null], "Passwords is MisMatched"),
  });

  const defaultValues = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(NewPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    handleSubmit,
  } = methods;

  const onSubmit = async (data) => {
    try {
      // submit
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField
          name="newPassword"
          label="New Password"
          type={showNewPassword ? "text" : "password"}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name="confirmNewPassword"
          label="Confirm New Password"
          type={showConfirmNewPassword ? "text" : "password"}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setShowConfirmNewPassword(!showConfirmNewPassword)
                  }
                >
                  {showConfirmNewPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      

      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === LIGHT ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === LIGHT ? "common.white" : "grey.800",
          },
        }}
      >
        {" "}
        Submit
      </Button>
      </Stack>
    </FormProvider>
  );
};

export default NewPasswordForm;
