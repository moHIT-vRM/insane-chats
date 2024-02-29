import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
  sideBar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle the sidebar
    toggleSideBar(state, action) {
      state.sideBar.open = !state.sideBar.open;
    },

    // update the sidebar type
    updateSidebar(state, action) {
      state.sideBar.type = action.payload.type;
    },
  },
});

// Reducer
export default slice.reducer;

export const ToggleSideBar = () => {
  return async () => {
    dispatch(slice.actions.toggleSideBar());
  };
};

export const UpdateSidebar = (type) => {
  return async () => {
    dispatch(slice.actions.updateSidebar({type}));
  };
};
