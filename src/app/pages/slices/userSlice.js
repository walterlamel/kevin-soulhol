import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       session: {
              user: false,
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
              getSessionFailed(state, action) {
                     state.session.loading = false;
                     state.session.user = initialState.session.user;
                     state.session.messageLogin = action.payload;
                     state.session.isConnect = false;
              },
       },
});

export const selectUser = (state) => state.app.session.user;
export const messageLogin = (state) => state.app.session.messageLogin;

export const { getSession, getSessionSuccess, getSessionFailed } =
       userSlice.actions;

export default userSlice.reducer;
