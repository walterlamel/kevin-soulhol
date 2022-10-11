import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPlayer1Points, selectPlayer2Points } from "../slices/morpionSlice";
import SymbolePlayer from "./SymbolesPlayer";

const Points = () => {
    const player1Point = useSelector(selectPlayer1Points);
    const player2Point = useSelector(selectPlayer2Points);
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const animate = {
        y : [0, -50, 0],
        scale: [1, 2, 1]
    }

    useEffect(() => {
        controls1.start(animate)
    }, [player1Point])

    useEffect(() => {
        controls2.start(animate)
    }, [player2Point])
    
    return (
        
        <div className="container-points">
            <div className="container-player player1">
                <motion.div className="containPoints" initial={false} animate={controls1} >{player1Point}</motion.div>
                <p><SymbolePlayer player={1} /></p>
            </div>
            <div className="container-player player2">
                <motion.div className="containPoints" initial={false} animate={controls2} >{player2Point}</motion.div>
                <p><SymbolePlayer player={2} /></p>
            </div>
            
            
        </div>
    )
}

export default Points;