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

export default configureStore({
       reducer: {
              app: userReducer,
              popup: popupReducer,
              login: loginReducer,
              conversation: conversationReducer,
       },
});
