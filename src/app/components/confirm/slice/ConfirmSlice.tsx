import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface stateConfirm {
    opened?: boolean;
    title?: string;
    text?: string;
    btn_accept?: string;
    btn_cancel?: string;
    response?: boolean|null;
    accept?: Function | false;
} 

export const initialState : stateConfirm = {
       opened: false,
       title: "",
       text: "Êtes-vous sûr ?",
       btn_accept: "Je confirme",
       btn_cancel: "Annuler",
       response: null,
       accept : false
};

export const confirmSlice = createSlice({
       name: "confirm",
       initialState,
       reducers: {
              openConfirm: (state) => {
                     state.opened = true;
              },
              closeConfirm: (state) => {
                     state.opened = false;
              },
              chooseConfirm : (state, actions : PayloadAction<stateConfirm['response']>) => {
                    state.response = actions.payload ?? true;
                    state.opened = false;
              },
              displayConfirm : (state, actions : PayloadAction<stateConfirm>) => {
                state.title = actions.payload.title ?? initialState.title;
                state.text = actions.payload.text ?? initialState.text;
                state.btn_accept = actions.payload.btn_accept ?? initialState.btn_accept;
                state.btn_cancel = actions.payload.btn_cancel ?? initialState.btn_cancel;
                state.accept = actions.payload.accept;
                state.opened = true;
              },
              restart : (state) => {
                state.response = initialState.response;
                state.accept = initialState.accept;
              }

       },
});

export const { openConfirm, closeConfirm, chooseConfirm, displayConfirm } = confirmSlice.actions;

export const openedConfirm = (state:RootState) => state.confirm.opened;
export const titleConfirm = (state:RootState) => state.confirm.title;
export const textConfirm = (state:RootState) => state.confirm.text;
export const acceptBtnTextConfirm = (state:RootState) => state.confirm.btn_accept;
export const cancelBtnTextConfirm = (state:RootState) => state.confirm.btn_cancel;
export const functionConfirm = (state:RootState) => state.confirm.accept;

export default confirmSlice.reducer;
