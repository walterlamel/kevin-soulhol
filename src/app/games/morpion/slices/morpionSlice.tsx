import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export type rowType = 0 | 1 | 2;
export type ligneGrille = [rowType, rowType, rowType];
export type tableGrilleType = [
    ligneGrille,
    ligneGrille,
    ligneGrille
    //[rowType, rowType, rowType],
]

export const initialGrille:tableGrilleType = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

export interface MorpionInitialType {
    statut : "" | "player1" | "player2" | "end" | "egality";
    loading : boolean;
    lastwinner : 1 | 2 | 0;
    player1Point : number;
    player2Point : number;
    grille: tableGrilleType;
    firstPlayerForTurn: 1 | 2;
};



const initialState: MorpionInitialType = {
        statut: "player1",
        loading : false,
        lastwinner: 0,
        player1Point: 0,
        player2Point: 0,
        grille: initialGrille,
        firstPlayerForTurn: 1
};

export type dataPlayerType = {
    name: string;
}
interface objectDataPlayerType {
    [key: string]: dataPlayerType
}

export const dataPlayers: objectDataPlayerType = {
    "player1" : {
        name: "Poo"
    },
    "player2" : {
        name: "Bomber"
    },
    "" : {
        name: ""
    }
}

export const MorpionSlice = createSlice({
    name: "morpion",
    initialState,
    reducers: {
        startGame(state){
            state.firstPlayerForTurn = state.firstPlayerForTurn === 1 ? 2 : 1;
            state.statut = state.firstPlayerForTurn === 1 ? "player1" : "player2";
            state.grille = initialGrille
        },
        restartGame(state){
            state.statut = ""
            state.grille = initialGrille;
        },
        changePlayer(state){
            state.statut = state.statut === "player1" ? "player2" : "player1";
        },
        setGrille(state, action : PayloadAction<{ligne: number, colonne: number}>){
            let newgrille = [...state.grille];
            newgrille[action.payload.ligne][action.payload.colonne] = (state.statut === "player1") ? 1 : 2;
        },
        endGame(state, action : PayloadAction<MorpionInitialType['lastwinner']>){
            state.statut = "end";
            state.lastwinner = action.payload;
            switch(action.payload){
                case 1 :
                    state.player1Point++;
                    break;
                case 2:
                    state.player2Point++;
                    break;
                default:
                    return;
            }
        },
        egalityGame(state){
            console.log("EGALITY")
            state.statut = "egality";
        }
    }
})


export const {startGame, changePlayer, endGame, setGrille, restartGame, egalityGame } = MorpionSlice.actions;

export const selectStatut = (state:RootState) => state.morpion.statut;
export const selectLoadingMorpion = (state:RootState) => state.morpion.loading;
export const selectLastWinner = (state:RootState) => state.morpion.lastwinner;
export const selectPlayer1Points = (state:RootState) => state.morpion.player1Point;
export const selectPlayer2Points = (state:RootState) => state.morpion.player2Point;
export const selectGrille = (state:RootState) => state.morpion.grille;


export default MorpionSlice.reducer;
