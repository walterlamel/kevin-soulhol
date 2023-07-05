import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { IInitial } from "../../../types/storeType";

const initialState: IInitial = {
  session: {
    user: undefined,
    loading: false,
    messageLogin: false,
    isConnect: false,
  },
};

export const userSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    getSession(state) {
      state.session.loading = true;
    },
    getSessionSuccess(state, action) {
      state.session.loading = false;
      state.session.user = action.payload;
      state.session.isConnect = true;
    },
    getSessionFailed(state, action: PayloadAction<string>) {
      state.session.loading = false;
      state.session.user = initialState.session.user;
      state.session.messageLogin = action.payload;
      state.session.isConnect = false;
    },
  },
});

export const selectUser = (state: RootState) => state.app.session.user;
export const messageLogin = (state: RootState) =>
  state.app.session.messageLogin;
export const loadingUser = (state: RootState) => state.app.session.loading;

export const { getSession, getSessionSuccess, getSessionFailed } =
  userSlice.actions;

export default userSlice.reducer;
