/**
 *
 * Store de redux
 *
 * Gère la fenêtre de confirmation
 *
 */

import { configureStore } from "@reduxjs/toolkit";
import ConfirmSlice from "./slice/ConfirmSlice";

export const storeConfirm = configureStore({
  reducer: {
    confirm: ConfirmSlice,
  },
});

export default storeConfirm;

export type RootState = ReturnType<typeof storeConfirm.getState>;
