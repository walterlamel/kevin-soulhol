import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import World from "./World/World";
import Menu from "./Menu/Menu";
import Popup from "./Popup";

const Page = ({ classname, children }) => {
       return (
              <div className={"page" + (classname ? " " + classname : "")}>
                     <div className="container-world">
                            <World></World>
                     </div>
                     <div className="container-page">
                            <Menu />

                            <AnimatePresence>
                                   <motion.div
                                          initial={{ opacity: 0, x: 100 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          exit={{ opacity: 0, x: -10 }}
                                   >
                                          {children}
                                   </motion.div>
                            </AnimatePresence>
                     </div>
                     <Popup />
              </div>
       );
};

export default Page;
