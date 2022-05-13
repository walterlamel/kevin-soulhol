import React, { useState, createRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Experience from "./Experience";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import EXP from "../../data/experiences";

const Experiences = () => {
       const ref = createRef();
       const [currentSee, setCurrentSee] = useState(1);
       const [widthMoving, setWidthMoving] = useState(0);
       const [exps, setExps] = useState([]);

       useEffect(() => {
              let EXP2 = EXP.sort(dynamicSort("date"));
              setExps(EXP2);
       }, []);

       function getTo(page) {
              if (page > EXP.length) {
                     page = 1;
                     setWidthMoving(0);
                     setCurrentSee(page);
              } else {
                     let exp = document.querySelectorAll(".contain-experience");
                     let elem = exp[page - 1];

                     setWidthMoving((prev) => prev + (elem.clientWidth + 100));

                     setCurrentSee(page);
              }
       }

       function next() {
              getTo(currentSee + 1);
       }

       return (
              <div className="container-experiences">
                     <motion.div
                            className="slider no-visible-scroll"
                            animate={{ x: -widthMoving }}
                            ref={ref}
                     >
                            {exps.map((exp, key) => (
                                   <Experience
                                          key={key}
                                          projet={exp}
                                          actif={currentSee - 1 === key}
                                   />
                            ))}
                            <span id="tobecontinued">To be continued...</span>
                     </motion.div>
                     <div className="bg_ligne"></div>
                     <motion.div
                            className="ico"
                            onClick={next}
                            whileHover={{ x: 15 }}
                            whileTap={{ scale: 0.8 }}
                     >
                            <FontAwesomeIcon icon={faArrowRight} />
                     </motion.div>
              </div>
       );
};

export default Experiences;

/**
 * Function to sort alphabetically an array of objects by some specific key.
 *
 * @param {String} property Key of the object to sort.
 */
function dynamicSort(property) {
       var sortOrder = 1;

       if (property[0] === "-") {
              sortOrder = -1;
              property = property.substr(1);
       }

       return function (a, b) {
              if (sortOrder === -1) {
                     return b[property].localeCompare(a[property]);
              } else {
                     return a[property].localeCompare(b[property]);
              }
       };
}
