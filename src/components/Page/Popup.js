import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import { PopupContext } from "../../context/PopupProvider";

const variants = {
       closed: {
              scale: 0,
       },
       opened: {
              scale: 1,
       },
};

const Popup = () => {
       const { open, setOpen, inside, classe } = useContext(PopupContext);

       function handleClickBg(e) {
              if (e.target.className === "bg-popup") {
                     setOpen(false);
              }
       }

       return (
              <AnimatePresence>
                     {open && (
                            <div
                                   className="bg-popup"
                                   onClick={(e) => {
                                          handleClickBg(e);
                                   }}
                            >
                                   <motion.div
                                          className={
                                                 "popup " +
                                                 (classe ?? " " + classe)
                                          }
                                          variants={variants}
                                          initial={"closed"}
                                          animate={"opened"}
                                          exit={"closed"}
                                   >
                                          <div className="contain-details">
                                                 <div
                                                        className="contain-close"
                                                        onClick={(e) =>
                                                               setOpen(false)
                                                        }
                                                 >
                                                        <FontAwesomeIcon
                                                               icon={faClose}
                                                        />
                                                 </div>
                                                 {inside}
                                          </div>
                                   </motion.div>
                            </div>
                     )}
              </AnimatePresence>
       );
};

export default Popup;
