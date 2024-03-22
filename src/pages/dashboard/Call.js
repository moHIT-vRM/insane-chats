import {
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { LIGHT } from "../../config";
import { MagnifyingGlass, Phone } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import ScrollerStack from "../../components/Custom/ScrollerStack";
import { CallLogs } from "../../data";
import { CallLogElement } from "../../components/CallElement";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const theme = useTheme();
  const [callingDialog, setCallingDialog] = useState(false);
  return (
    <>
      <Stack flexDirection={"row"} width={"100%"}>
        {/* Left Section */}
        <Stack
          height={"100vh"}
          backgroundColor={
            theme.palette.mode === LIGHT
              ? theme.palette.grey[50]
              : theme.palette.background.default
          }
          width={320}
          boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}
        >
          <Stack maxHeight={"100vh"} spacing={2} p={2}>
            <Typography variant="h4">Call Log</Typography>
            <TextField
              id="search"
              placeholder="Search"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <MagnifyingGlass size={16} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              endIcon={<Phone />}
              sx={{ justifyContent: "space-between" }}
              variant="text"
              color="primary"
              onClick={() => setCallingDialog(true)}
            >
              Start a conversation
            </Button>
            <Divider width={"100%"} />
            <ScrollerStack
              height={"100%"}
              flexGrow={1}
              spacing={1.5}
              flexDirection={"column"}
            >
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2}>
                  {CallLogs?.map((el) => (
                    <CallLogElement key={el.id} {...el} />
                  ))}

                  {/* Chat List */}
                </Stack>
              </SimpleBarStyle>
            </ScrollerStack>
          </Stack>
        </Stack>
        {/* Right Section */}
        <Stack></Stack>
      </Stack>
      {callingDialog && (
        <StartCall
          open={callingDialog}
          handleClose={() => setCallingDialog(false)}
        />
      )}
    </>
  );
};

export default Call;
