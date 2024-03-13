import { Stack } from "@mui/material";
import React from "react";

const ScrollerStack = ({ sxProps, children, ...attributes }) => {
  return (
    <Stack
      position={"relative"}
      sx={{
        overflowY: "scroll",
        "::-webkit-scrollbar": {
          display: "none",
        },
        ...sxProps,
      }}
      {...attributes}
    >
      {children}
    </Stack>
  );
};

export default ScrollerStack;
