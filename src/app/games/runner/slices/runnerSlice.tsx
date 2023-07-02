import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const optionsRunner = {
  EnnemyinitialSpeed: 5, //vitesse de base avant augmentation avec level
  EnnemyInitialPositionY: -50, //point d'apparition de l'ennemi ligne verticale. A mettre hors de l'écran, sous 0
  EnnemyMinSize: 30, //en px
  EnnemyMaxSize: 60, //en px
  initialTimeBetweenTwoEnnemy: 1000, //milisecond
  augmentationSpeedEnnemyByLevel: 10, //en millisecond : chaque changement de level, l'apparition d'un ennemy se fera augmentationSpeedEnnemyByLevel de moins
  steplevel: 1, //tous les steplevel en score, le niveau augmente de 1
  maxSpeedEnnemy: 130, //en dessous de cette valeur, le speed d'apparition des ennemis ne descendra pas plus
  percentAppearBonus: 10, //les bonus à attraper ont percentAppearBonus% d'apparaitre au lieu d'un ennemy
  bonusPoint: 10, //point ajouté au score pour chaque bonus touché
  sizeBonus: 15, //en pixel
};

export type statutRunnerGame = "paused" | "started" | "gameover";
export interface positionType {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface initialStateType {
  statutRunner: statutRunnerGame;
  score: number;
  colisionPlayer: positionType;
  level: number;
  speedAppearEnnemy: number;
  bonusCatched: number;
  bonusMissed: number;
}

export const initialState: initialStateType = {
  statutRunner: "paused",
  score: 0,
  colisionPlayer: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  level: 1,
  speedAppearEnnemy: optionsRunner.initialTimeBetweenTwoEnnemy,
  bonusCatched: 0,
  bonusMissed: 0,
};

export const RunnerSlice = createSlice({
  name: "runner",
  initialState,
  reducers: {
    startGame(state) {
      state.statutRunner = "started";
      state.level = initialState.level;
      state.speedAppearEnnemy = initialState.speedAppearEnnemy;
    },
    restartGame(state) {
      state.score = initialState.score;
      state.level = initialState.level;
      state.speedAppearEnnemy = initialState.speedAppearEnnemy;
      state.bonusCatched = 0;
      state.statutRunner = "started";
    },
    pauseGame(state) {
      state.statutRunner = "paused";
    },
    gameOver(state) {
      state.statutRunner = "gameover";
    },
    addScore(state) {
      state.score = state.score + 1;
    },
    changeColisonPlayer(state, actions: PayloadAction<positionType>) {
      state.colisionPlayer = actions.payload;
    },
    levelUp(state) {
      state.level = state.level + 1;
      if (state.speedAppearEnnemy > optionsRunner.maxSpeedEnnemy) {
        state.speedAppearEnnemy =
          state.speedAppearEnnemy -
          optionsRunner.augmentationSpeedEnnemyByLevel;
      }
    },
    takeBonus(state) {
      state.score = state.score + optionsRunner.bonusPoint;
      state.bonusCatched += 1;
    },
    missBonus(state) {
      state.bonusMissed += 1;
    },
  },
});

export const {
  startGame,
  restartGame,
  pauseGame,
  gameOver,
  addScore,
  changeColisonPlayer,
  levelUp,
  takeBonus,
  missBonus,
} = RunnerSlice.actions;

export const selectStatut = (state: RootState) => state.runner.statutRunner;
export const selectScore = (state: RootState) => state.runner.score;
export const selectColisionPlayer = (state: RootState) =>
  state.runner.colisionPlayer;
export const selectLevel = (state: RootState) => state.runner.level;
export const selectSpeedAppearEnnemy = (state: RootState) =>
  state.runner.speedAppearEnnemy;
export const selectBonusCatched = (state: RootState) =>
  state.runner.bonusCatched;
export const selectBonusMissed = (state: RootState) => state.runner.bonusMissed;

export default RunnerSlice.reducer;
