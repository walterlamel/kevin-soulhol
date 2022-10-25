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
              params: {
                     filter: {
                            in_homepage: 1,
                            is_brouillon: 0,
                            orderBy: "date",
                            asc: "desc",
                     },
              },
       });

       useEffect(() => {
              setLength(list.length);
       }, [list]);

       function getTo(page) {
              if (list) {
                     if (page <= 0) {
                            page = 1;
                            setWidthMoving(0);
                     } else if (page > list.length) {
                            page = 1;
                            setWidthMoving(0);
                     } else {
                            let exp = document.querySelectorAll(".work-card");
                            let moving = 0;
                            exp.forEach((element, key) => {
                                   if (key >= page - 1) {
                                          return;
                                   }

                                   moving = moving + element.clientWidth;
                            });
                            setWidthMoving((prev) => moving);
                     }
                     setCurrentSee(page);
              }
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
              return res ? res : 0;
       }

       return (
              <div className="liste-work-card">
                     <motion.div
                            className="slider no-visible-scroll"
                            animate={{ x: -widthMoving }}
                     >
                            {list?.map((work, key) => (
                                   <WorkCard
                                          key={key}
                                          projet={work}
                                          actif={currentSee === key + 1}
                                          getTo={getTo}
                                          Key={key}
                                          visible={currentSee + 3 > key}
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
