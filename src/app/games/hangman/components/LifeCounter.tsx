import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";


const variants = {
    hidden : { 
        opacity: [1, 1, 0],
        scale: [1, 5, 0],
        rotate: [0, 0, -100],
    },
    visible : { 
        opacity: 1,
        scale: 1,
        rotate: 0,
    },
};

const LifeCounter = ( { life } : { life : number } ) => {


    return (
            <div className="lifeCounter-hangman">
            <AnimatePresence>
                {Array(life < 0 ? 0 : life).fill(1).map(( (_nb, index) => (
                    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" key={index}>
                        <FontAwesomeIcon icon={faHeart} />
                    </motion.div>
                )))}
                </AnimatePresence>
            </div>
    )
}

export default LifeCounter;


/*


                    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" key={index}>
                        <FontAwesomeIcon icon={faHeart} />
                    </motion.div>

                    */