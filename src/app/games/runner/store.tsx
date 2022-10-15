/**
 *
 * Store de redux
 *
 * Gère les states pour le jeu de Runner
 *
 */

 import { configureStore } from "@reduxjs/toolkit";
 import RunnerReducer from "./slices/runnerSlice";
 
  export const storeRunner = configureStore({
     reducer: {
            runner : RunnerReducer
     },
 });
 
 export default storeRunner;
 
 export type RootState = ReturnType<typeof storeRunner.getState>