/**
 *
 * Store de redux
 *
 * Gère les states pour le jeu de Morpion
 *
 */

import { configureStore } from "@reduxjs/toolkit";
import MorpionReducer from "./slices/morpionSlice";

 export const storeMorpion = configureStore({
    reducer: {
           morpion : MorpionReducer
    },
});

export default storeMorpion;

export type RootState = ReturnType<typeof storeMorpion.getState>