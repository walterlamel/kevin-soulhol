import { motion } from "framer-motion";

import Pins from "./Pins";

import { useDispatch } from "react-redux";
import { createPopup } from "../../../../components/popup/slice/popupSlice";

const variants_date = {
       actif: {
              y: [0, -10, 0, -8, 0],
              transition: {
                     duration: 1,
                     repeat: Infinity,
                     repeatDelay: 0.2,
              },
       },
       normal: {
              transition: {
                     duration: 1,
                     repeat: 0,
                     repeatDelay: 0.2,
              },
       },
       tap: {},
       hover: {
              y: -20,
       },
};

const Experience = ({ projet, actif }) => {
       const dispatch = useDispatch();

       return (
              <>
                     <motion.div
                            className="contain-experience"
                            variants={variants_date}
                            whileHover="hover"
                            onClick={(e) =>
                                   dispatch(
                                          createPopup(
                                                 <InsidePopup
                                                        experience={projet}
                                                 />,
                                          ),
                                   )
                            }
                     >
                            <motion.span
                                   className="date"
                                   variants={variants_date}
                                   animate={actif ? "actif" : "normal"}
                            >
                                   {projet.date}
                            </motion.span>
                            <Pins actif={actif} />
                            <div className="container-text">
                                   <span className="titre">{projet.titre}</span>
                                   <span className="type">{projet.type}</span>
                            </div>
                     </motion.div>
              </>
       );
};

const InsidePopup = ({ experience }) => {
       return (
              <div className="inside-popup-experience">
                     <div className="container-text">
                            <span className="date">{experience.date}</span>
                            <span className="titre">{experience.titre}</span>
                            <span className="lieu">{experience.lieu}</span>
                            <div className="container-desc">
                                   {experience.desc}
                            </div>
                     </div>
              </div>
       );
};

export default Experience;
