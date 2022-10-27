import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const variants_arrow = {
       hover: {
              scale: 1.1,
       },
       tap: {
              scale: 0.9,
       },
};

const Slider = ({ childs }) => {
       const [currentSeenImg, setCurrentSeenImg] = useState(0);

       function goTo(page) {
              if (childs) {
                     if (page >= childs.length) {
                            page = 0;
                     } else if (page < 0) {
                            page = childs.length - 1;
                     }

                     setCurrentSeenImg(page);
              }
       }

       return (
              <div className="container-slider">
                     {childs.length > 1 && (
                            <>
                                   <motion.div
                                          className="ico-next"
                                          whileHover={"hover"}
                                          whileTap={"tap"}
                                          variants={variants_arrow}
                                          onClick={(e) =>
                                                 goTo(currentSeenImg + 1)
                                          }
                                   >
                                          <FontAwesomeIcon
                                                 icon={faArrowRight}
                                          />
                                   </motion.div>
                                   <motion.div
                                          className="ico-prev"
                                          whileHover={"hover"}
                                          whileTap={"tap"}
                                          variants={variants_arrow}
                                          onClick={(e) =>
                                                 goTo(currentSeenImg - 1)
                                          }
                                   >
                                          <FontAwesomeIcon icon={faArrowLeft} />
                                   </motion.div>
                            </>
                     )}
                     <div className="overflower">
                            <motion.div
                                   className="scroller"
                                   initial={false}
                                   animate={{
                                          x: -(currentSeenImg * 100) + "%",
                                   }}
                            >
                                   {childs &&
                                          childs.map((img, key) => (
                                                 <div
                                                        className="contain-img"
                                                        key={key}
                                                 >
                                                        <img
                                                               src={
                                                                      process
                                                                             .env
                                                                             .REACT_APP_API_USER +
                                                                      "uploads/" +
                                                                      img.path
                                                               }
                                                               alt=""
                                                        />
                                                 </div>
                                          ))}
                            </motion.div>
                     </div>
              </div>
       );
};

export default Slider;
