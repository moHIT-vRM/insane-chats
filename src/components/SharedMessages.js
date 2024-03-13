import {
  Box,
  IconButton,
  Stack,
  Tab,
  Typography,
  useTheme,
  Tabs,
  Grid,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { LIGHT, PanelType } from "../config";
import { useDispatch } from "react-redux";
import { CaretLeft } from "phosphor-react";
import { UpdateSidebar } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
import ScrollerStack from "./Custom/ScrollerStack";

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMediaChange = useCallback(() => {
    switch (value) {
      case 0:
        return (
          <Grid container spacing={2}>
            {[0, 1, 2, 3, 4, 5, 6].map((el, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  component={"img"}
                  alt={faker.name.fullName()}
                  src={faker.image.avatar()}
                />
              </Grid>
            ))}
          </Grid>
        );

      case 1:
        return SHARED_LINKS.map((el) => <LinkMsg el={el} />);
      case 2:
        return SHARED_DOCS.map((el) => <DocMsg el={el} />);
      default:
        break;
    }
  }, [value]);

  return (
    <Stack width={320} height={"100vh"}>
      <Stack height={"100%"}>
        {/* header */}
        <Stack
          boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
          width={"100%"}
          sx={{
            backgroundColor:
              theme.palette.mode === LIGHT
                ? theme.palette.grey[50]
                : theme.palette.background,
          }}
        >
          <Stack
            width={"100%"}
            flexDirection={"row"}
            p={2}
            alignItems={"center"}
          >
            <IconButton
              onClick={() => dispatch(UpdateSidebar(PanelType.CONTACT))}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Stack>
        <Tabs px={2} pt={2} value={value} onChange={handleChange} centered>
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        {/* Body */}

        <ScrollerStack
          p={2}
          spacing={value === 1 ? 1 : 3}
          flexGrow={1}
          height={"100%"}
        >
          {handleMediaChange()}
        </ScrollerStack>
      </Stack>
    </Stack>
  );
};

export default SharedMessages;
