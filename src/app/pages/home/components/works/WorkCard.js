import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { createPopup } from "../../../../components/popup/slice/popupSlice";
import { Suspense } from "react";

const variants = {
       open: {
              x: 0,
              opacity: 0.5,
              transition: {
                     y: { stiffness: 1000, velocity: -100 },
              },
       },
       closed: {
              x: 250,
              opacity: 0,
              transition: {
                     y: { stiffness: 1000 },
              },
       },
       exit: {
              x: -250,
              opacity: 0,
              transition: {
                     y: { stiffness: 1000 },
              },
       },
       actif: {
              opacity: 1,
              y: -10,
              x: 0,
       },
};

const WorkCard = ({ projet, actif, getTo, Key, visible }) => {
       const dispatch = useDispatch();

       return (
              <motion.div
                     className="work-card"
                     variants={variants}
                     initial={"closed"}
                     animate={actif ? "actif" : "open"}
                     exit={"exit"}
                     whileHover={"actif"}
                     whileTap={{ scale: 0.95 }}
                     onClick={(e) => {
                            if (actif) {
                                   dispatch(createPopup(projet));
                            } else {
                                   getTo(Key + 1);
                            }
                     }}
              >
                     <div className="container-text">
                            <h4>{projet.title}</h4>
                            <div className="container-infos-sup">
                                   <span className="date">{projet.date}</span>
                                   <span className="category">
                                          {projet.type}
                                   </span>
                            </div>
                            <div className="container-desc">
                                   {projet.short_desc}
                            </div>
                     </div>
                     <div className="container-img">
                            {visible && (
                                   <Suspense fallback={<img />}>
                                          <img
                                                 src={
                                                        process.env
                                                               .REACT_APP_API_USER +
                                                        "uploads/" +
                                                        (projet.main_img !==
                                                        null
                                                               ? projet.main_img
                                                               : "")
                                                 }
                                          />
                                   </Suspense>
                            )}
                     </div>
              </motion.div>
       );
};

export default WorkCard;
