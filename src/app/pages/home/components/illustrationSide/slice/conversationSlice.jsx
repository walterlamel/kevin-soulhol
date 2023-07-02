import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "dev",
  text: "Je ne crois pas que vous devriez lire ça...",
  opened: false,
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    changeConv: (state, action) => {
      state.title = action.payload.title;
      state.text = action.payload.text;
      state.opened = true;
    },
    closeConv: (state) => {
      state.opened = false;
    },
  },
});

export const openedConv = (state) => state.conversation.opened;
export const titleConv = (state) => state.conversation.title;
export const textConv = (state) => state.conversation.text;

export const { changeConv, closeConv } = conversationSlice.actions;

export default conversationSlice.reducer;
