import React, { useCallback } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required").max(16, "max limit reached"),
  about: Yup.string().required("About is Required"),
  avatarUrl: Yup.string().required("AvatarUrl is Required").nullable(true),
});

const ProfileForm = () => {
  const defaultValues = {
    name: "",
    about: "",
    avatartUrl: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    setValue,
    watch,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    handleSubmit,
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

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
          name="name"
          label="Name"
          helperText={"This name is visible to you contacts"}
        />
        <RHFTextField
          name="about"
          label="About"
          multiline
          rows={4}
          maxRows={5}
        />
        <Stack flexDirection={'row-reverse'}>
          <Button variant="outlined" type="submit" size="large"  color="primary" >
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
