import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { levelUp, selectBonusCatched, selectScore } from "../slices/runnerSlice"
import { optionsRunner } from "../slices/runnerSlice";
import { motion, useAnimationControls } from "framer-motion";


const Score = () => {
    const score = useSelector(selectScore);
    const bonusCatched = useSelector(selectBonusCatched);
    const controls = useAnimationControls();
    const dispatch = useDispatch();
    const animation = {
        y : [0, -10, 0], 
        scale: [ 1, 2, 1]
    }

    //change de niveau tous les STEP_LEVEL
    useEffect(() => {
        if(Math.floor(score%optionsRunner.steplevel) === 0){
            dispatch(levelUp());
        }
    }, [score])

    //animation pour chaque bonus attrapé
    useEffect(() => {
        controls.start(animation)
    }, [bonusCatched])

    return <motion.div className="score" initial={false} animate={controls}>{score}</motion.div>
}

export default Score;