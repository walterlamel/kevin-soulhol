import { useSelector } from "react-redux"
import {  selectStatut } from "../slices/morpionSlice"
import RestartBtn from "./RestartBtn";

const WhoTurn = () => {
    const currentPlayer= useSelector(selectStatut);

    return (
        <>
        {currentPlayer === "end" || currentPlayer === "egality" ? (
            <RestartBtn />
        ) : (
            <div className="whoturn">
                <p className="name">{currentPlayer}</p>
                <p className="soustitre">à toi !</p>
            </div>
        )}
        </>
        
    )
}

export default WhoTurn;