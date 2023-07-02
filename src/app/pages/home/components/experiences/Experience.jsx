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
        onClick={(e) => dispatch(createPopup(projet))}
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

export default Experience;
