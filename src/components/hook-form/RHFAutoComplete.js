import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

RHFAutoComplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFAutoComplete({ name, label, helperText, ...other }) {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          onChange={(event, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          {...other}
          renderInput={(params) => (
            <TextField
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
              {...params}
            />
          )}
        />
      )}
    />
  );
}
