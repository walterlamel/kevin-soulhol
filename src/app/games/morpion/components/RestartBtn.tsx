import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { restartGame, startGame } from "../slices/morpionSlice";

const TIME_BEFORE_AUTO_RESTART = 10; //en seconde

const RestartBtn = () => {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState<number>(TIME_BEFORE_AUTO_RESTART);

    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(prev => prev-1)
        }, 1000);
        let timeout = setTimeout(() => {
            restart()
        }, TIME_BEFORE_AUTO_RESTART * 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout)
        }
    }, [])

    function restart(){
        dispatch(restartGame());
        setTimeout(() => {
            dispatch(startGame());
        }, 100);
    }

    return (
        <div className="btn-restart" onClick={e => restart()}>
            <div className="counter">{counter}</div>
            <p className="soustitre">Relancer</p>
        </div>
    )
}

export default RestartBtn;