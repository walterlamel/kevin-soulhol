import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import WorkCard from "./WorkCard";

import useGetProjects from "../../../../../hooks/useGetProjects";

const ListeWorkCards = () => {
       const [currentSee, setCurrentSee] = useState(1);
       const [widthMoving, setWidthMoving] = useState(0);
       const [length, setLength] = useState(0);
       const { list } = useGetProjects({
              params: { in_homepage: 1, is_brouillon: 0 },
       });

       useEffect(() => {
              setLength(list.length);
       }, [list]);

       /** Permet l'infinity en copiant le premier élément au fond */
       useEffect(() => {
              const elems = document.querySelectorAll(".work-card");
              const elem = elems[currentSee - 3];
              const container = document.querySelector(
                     ".liste-work-card .slider",
              );
              if (container && elem) {
                     container.appendChild(elem.cloneNode(true));
              }
       }, [currentSee]);

       function getTo(page) {
              if (page <= 0) {
                     page = 1;
                     setWidthMoving(0);
              } else {
                     let exp = document.querySelectorAll(".work-card");
                     if (page < currentSee) {
                            let elem = exp[page - 1];
                            setWidthMoving((prev) => prev - elem.clientWidth);
                     } else {
                            let elem = exp[page - 1];
                            setWidthMoving((prev) => prev + elem.clientWidth);
                     }
              }
              setCurrentSee(page);
       }

       function next() {
              getTo(currentSee + 1);
       }

       function getCurrentPage() {
              let res = currentSee;
              if (currentSee > length) {
                     res = currentSee % length;
                     res === 0 ? (res = length) : (res = res);
              }
              return res;
       }

       return (
              <div className="liste-work-card">
                     <motion.div
                            className="slider no-visible-scroll"
                            animate={{ x: -widthMoving }}
                     >
                            {list &&
                                   list?.map((work, key) => (
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
                                          {getCurrentPage()}
                                   </motion.span>
                            )}
                            <span>/</span>
                            <span className="max-slides">{length}</span>
                            <div className="ico">
                                   <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                     </div>
              </div>
       );
};

export default ListeWorkCards;
