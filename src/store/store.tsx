/**
 *
 * Store de redux
 *
 * Gère les states de l'ensemble de l'api
 *
 */

import { configureStore } from "@reduxjs/toolkit";

import popupReducer from "../app/components/popup/slice/popupSlice";
import loginReducer from "../app/components/login/slice/loginSlice";
import userReducer from "../app/pages/slices/userSlice";
import conversationReducer from "../app/pages/home/components/illustrationSide/slice/conversationSlice";
import ConfirmSlice from "../app/components/confirm/slice/ConfirmSlice";

const store = configureStore({
  reducer: {
    app: userReducer,
    popup: popupReducer,
    confirm: ConfirmSlice,
    login: loginReducer,
    conversation: conversationReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
