import { createRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import WorkCard from "./WorkCard";

import WORKS from "../../../../../data/works";

const ListeWorkCards = () => {
       const ref = createRef();
       const [currentSee, setCurrentSee] = useState(1);
       const [widthMoving, setWidthMoving] = useState(0);
       const [works, setWorks] = useState(WORKS);

       useEffect(() => {
              if (ref && ref.current && ref.current.clientWidth)
                     setWidthMoving(ref.current.clientWidth / WORKS.length);
       }, [ref]);

       function getTo(page) {
              let p = page;
              let diff = -(currentSee - page);

              let arr = [...works];
              for (let index = 0; index < diff; index++) {
                     arr.push(arr[p - (diff - index) - 1]);
              }
              setWorks(arr);
              setCurrentSee(p);
       }

       function next() {
              getTo(currentSee + 1);
       }

       return (
              <div className="liste-work-card">
                     <motion.div
                            className="slider no-visible-scroll"
                            animate={{ x: -((currentSee - 1) * widthMoving) }}
                            ref={ref}
                     >
                            {works.map((work, key) => (
                                   <WorkCard
                                          key={key}
                                          projet={work}
                                          actif={currentSee === key + 1}
                                          getTo={getTo}
                                          Key={key}
                                   />
                            ))}
                     </motion.div>
                     <div className="container-summary-slides" onClick={next}>
                            {currentSee && (
                                   <motion.span
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 0.7 }}
                                          exit={{ opacity: 0, y: 200 }}
                                          transition={{
                                                 x: {
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 30,
                                                 },
                                                 opacity: {
                                                        duration: 0.2,
                                                 },
                                          }}
                                   >
                                          {currentSee > WORKS.length
                                                 ? currentSee % WORKS.length !==
                                                   0
                                                        ? currentSee %
                                                          WORKS.length
                                                        : 4
                                                 : currentSee}
                                   </motion.span>
                            )}
                            <span>/</span>
                            <span className="max-slides">{WORKS.length}</span>
                            <div className="ico">
                                   <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                     </div>
              </div>
       );
};

export default ListeWorkCards;
