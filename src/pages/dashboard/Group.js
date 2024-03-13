import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { LIGHT } from "../../config";
import {
  CircleDashed,
  FunnelSimple,
  MagnifyingGlass,
  Phone,
  Plus,
} from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import ScrollerStack from "../../components/Custom/ScrollerStack";

const Group = () => {
  const theme = useTheme();
  return (
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
        <Stack maxHeight={"100vh"} spacing={2} p={3}>
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
              <Typography
                variant="subtitle2"
                sx={{ margin: "8px 0px" }}
                color={theme.palette.grey[150]}
              >
                Pinned
              </Typography>
              {/* WIP */}
              {/* <Stack flexDirection={"column"} spacing={1}>
            {ChatList.filter((el) => el.pinned).map((el) => (
              <ChatElement key={el.id} {...el} />
            ))}
          </Stack>

          <Typography
            variant="subtitle2"
            color={theme.palette.grey[150]}
            sx={{ margin: "8px 0px" }}
          >
            All Chats
          </Typography>
          <Stack flexDirection={"column"} spacing={1}>
            {ChatList.filter((el) => !el.pinned).map((el) => (
              <ChatElement key={el.id} {...el} />
            ))}
          </Stack> */}
            </SimpleBarStyle>
          </ScrollerStack>
        </Stack>
      </Stack>
      {/* Right Section */}
      <Stack></Stack>
    </Stack>
  );
};

export default Group;
