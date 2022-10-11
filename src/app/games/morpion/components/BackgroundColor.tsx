/**
 * 
 * Gère le Background qui affiche le joueur en cours
 */


 import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectStatut } from "../slices/morpionSlice";

 const BackgroundColor = () => {
    const currentPlayer = useSelector(selectStatut);
    
    
    const variantsBGPlayer = {
        hidden : { 
            width:"0%",
            transition : { duration : 0.4, ease: "circOut"}
        },
        visible : { 
            width:"500%",
            transition : { duration : 1.3, delay: 0, ease: "circOut"}
        },
    }

    return (
        <>
        <AnimatePresence mode="sync"  >
                {currentPlayer === "player1" ? (
                <motion.div className="bg-player player1" variants={variantsBGPlayer} initial="hidden" animate="visible" exit="hidden"></motion.div>
                ) : (null)}
            </AnimatePresence>
            <AnimatePresence mode="sync"  >
                {currentPlayer === "player2" ? (
                <motion.div className="bg-player player2" variants={variantsBGPlayer} initial="hidden" animate="visible" exit="hidden"></motion.div>
                ) : (null)}
            </AnimatePresence>
            </>
    )
}

export default BackgroundColor;