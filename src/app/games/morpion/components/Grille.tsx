import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { endGame, initialGrille, setGrille, selectStatut, changePlayer, rowType, MorpionInitialType, selectLastWinner, selectGrille, tableGrilleType, ligneGrille, egalityGame } from "../slices/morpionSlice";
import SymbolePlayer from "./SymbolesPlayer";
import WhoTurn from "./WhoTurn";


        




export const Grille =  () => {
    const statutGame = useSelector(selectStatut);
    const grille :tableGrilleType = useSelector(selectGrille);
    const dispatch = useDispatch();


    useEffect(() => {
        const func = async () => {
            let check = checkWin();
            if(check === null){
                dispatch(changePlayer());
            }
        }

        if(grille === initialGrille){
            return;
        }

        func();
        
    }, [grille])

    async function handleClick(ligne: number, colonne: number){
        if(statutGame === "" || statutGame === "end"){ return; }
        dispatch(setGrille({ligne : ligne, colonne : colonne}));
    }

    function checkWin(){
        let result:null|1|2|"egality" = null;
        
        //check lignes
        grille.forEach((line, i) => {
            result = result || checkWinCase(grille[i][0], grille[i][1], grille[i][2]);
        })

        //check colonnes
        grille.forEach((line, i) => {
            result = result || checkWinCase(grille[0][i], grille[1][i], grille[2][i]);
        })

        //check diagonale
        result = result || checkWinCase(grille[0][0], grille[1][1], grille[2][2]);
        result = result || checkWinCase(grille[2][0], grille[1][1], grille[0][2]);

        if(result !== null){
            dispatch(endGame(result));
        }

        //verif egality
        let counter:number = 0;
        grille.forEach((line, i) => {
            line.forEach((row) => {
                if(row === 0){
                    counter++;
                }
            })
        })
        if(counter === 0){
            dispatch(egalityGame());
            return "egality";
        }

        return result;
    }
    
    function checkWinCase(cell1:rowType, cell2:rowType, cell3:rowType){
        if(cell1 !== 0 && cell1 === cell2 && cell2 === cell3){
            console.log(cell1, cell2, cell3)
            return cell1;
        }
        return null;
    }

    return (
        <div className="contain-morpion">
            <div className={"grille-morpion" + " " + statutGame}>
                {grille.map((ligne, keyLigne) => 
                    <>
                        {ligne.map((box, key) => (
                            <Row key={key} box={box} statutGame={statutGame} onClick={() => handleClick(keyLigne, key)} />
                        ))}
                    </>
                )}
            </div>
            <WhoTurn />
        </div>
        
    )
}

export default Grille;




const Row = ({statutGame, box, onClick}:{statutGame: MorpionInitialType['statut'], box: rowType, onClick: Function}) => {
    const [isClick, setIsClick] = useState<rowType>(0);
    const winner = useSelector(selectLastWinner);

    useEffect(() => {
        if(statutGame === ""){
            setIsClick(0);
        }
    }, [statutGame])

    function handleClick(){
        if(isClick){ return; }

        onClick()

        setIsClick((statutGame === "player1") ? 1 : 2);
    }

    return (
        <div className={"box" + " " + ((isClick === 1) ? "un" : "") + " " + ((isClick === 2) ? "deux" : "") + " " + ((statutGame === "end" && winner === isClick) ? "victory-case" : "")} onClick={e => handleClick()}><SymbolePlayer player={box} /></div>
    )
}


