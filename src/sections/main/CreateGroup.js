import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Button,
  Dialog,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
import RHFAutoComplete from "../../components/hook-form/RHFAutoComplete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MEMBERS = ["NAME1", "NAME2 ...", "NAME3 ...", "NAME4 ..."];

const CreatGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Group name is required"),
    members: Yup.array().min(2, "Must have atleast 2 members"),
  });

  const defaultValues = {
    title: "",
    members: [],
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitted, isValid },
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
      <Stack spacing={3} p={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <RHFTextField name="title" label="Title" />
        <RHFAutoComplete
          name={"members"}
          label={"Members"}
          multiple
          freeSolo
          options={MEMBERS.map((opt) => opt)}
          ChipProps={{ size: "medium" }}
        />
        <Stack
          spacing={2}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button variant="text" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
      maxWidth={"sm"}
    >
      <DialogTitle>Create New Group</DialogTitle>
      <CreatGroupForm />
      
    </Dialog>
  );
};

export default CreateGroup;
