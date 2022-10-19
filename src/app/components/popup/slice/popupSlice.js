import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
       opened: false,
       inside: null,
};

export const popupSlice = createSlice({
       name: "popup",
       initialState,
       reducers: {
              openPopup: (state) => {
                     state.opened = true;
              },
              closePopup: (state) => {
                     state.opened = false;
              },
              createPopup: (state, action) => {
                     state.inside = action.payload;
                     state.opened = true;
              },
       },
});

export const { openPopup, closePopup, createPopup } = popupSlice.actions;

export const openedPopup = (state) => state.popup.opened;
export const insidePopup = (state) => state.popup.inside;

export default popupSlice.reducer;
