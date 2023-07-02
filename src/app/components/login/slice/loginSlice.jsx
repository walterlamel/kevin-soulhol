/**
 *
 * Login Slice
 *
 * Gère l'apparition de la fenetre de login
 *
 */

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  opened: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    openLogin: (state) => {
      state.opened = true;
    },
    closeLogin: (state) => {
      state.opened = false;
    },
    toggleLogin: (state) => {
      state.opened = !state.opened;
    },
  },
});

export const { openLogin, closeLogin, toggleLogin } = loginSlice.actions;

export const openedLogin = (state) => state.login.opened;

export default loginSlice.reducer;
