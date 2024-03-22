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
import { MagnifyingGlass, Plus } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import ScrollerStack from "../../components/Custom/ScrollerStack";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";

const Group = () => {
  const theme = useTheme();
  const [createGroupDialog, setCreateGroupDialog] = useState(false);
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
            <Typography variant="h4">Groups</Typography>
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
              endIcon={<Plus />}
              sx={{ justifyContent: "space-between" }}
              variant="text"
              color="primary"
              onClick={() => setCreateGroupDialog(true)}
            >
              Create new Group
            </Button>
            <Divider width={"100%"} />
            <ScrollerStack
              height={"100%"}
              flexGrow={1}
              spacing={1.5}
              flexDirection={"column"}
            >
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={1}>
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.grey[150]}
                  >
                    Pinned
                  </Typography>
                  {/* Chat List */}
                  <Stack flexDirection={"column"} spacing={1.5}>
                    {ChatList.filter((el) => el.pinned).map((el) => (
                      <ChatElement key={el.id} {...el} />
                    ))}
                  </Stack>

                  {/* Group List  */}

                  <Typography
                    variant="subtitle2"
                    color={theme.palette.grey[150]}
                  >
                    All Group
                  </Typography>
                  <Stack flexDirection={"column"} spacing={1.5}>
                    {ChatList.filter((el) => !el.pinned).map((el) => (
                      <ChatElement key={el.id} {...el} />
                    ))}
                  </Stack>
                </Stack>
              </SimpleBarStyle>
            </ScrollerStack>
          </Stack>
        </Stack>
        {/* Right Section */}
        <Stack></Stack>
      </Stack>
      {createGroupDialog && (
        <CreateGroup
          open={createGroupDialog}
          handleClose={() => setCreateGroupDialog(false)}
        />
      )}
    </>
  );
};

export default Group;
