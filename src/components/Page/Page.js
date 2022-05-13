import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import World from "./World/World";
import Menu from "./Menu/Menu";
import Popup from "./Popup";
import Home from "../../pages/Home/Home";
import Account from "../../pages/Account/Account";

const variants = {
       open: {
              x: 0,
       },
       close: {
              x: "-100%",
       },
};

const Page = ({ classname, children }) => {
       const [worldOpen, setWorldOpen] = useState(false);
       const [onAccount, setOnAccount] = useState(false);

       useEffect(() => {
              if (window.innerWidth > 1130) {
                     setWorldOpen(true);
              }
       }, []);

       return (
              <div className={"page " + (onAccount ? "account" : "home")}>
                     <motion.div
                            className="container-world"
                            variants={variants}
                            initial={false}
                            animate={worldOpen ? "open" : "close"}
                     >
                            <World></World>
                     </motion.div>
                     <div className="container-page">
                            <Menu setOnAccount={setOnAccount} />
                            <div
                                   className="tes"
                                   onClick={(e) => {
                                          setWorldOpen((prev) =>
                                                 prev ? false : true,
                                          );
                                   }}
                            >
                                   Test
                            </div>

                            <AnimatePresence>
                                   <motion.div
                                          initial={{ opacity: 0, x: 100 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          exit={{ opacity: 0, x: -10 }}
                                   >
                                          {onAccount ? <Account /> : <Home />}
                                   </motion.div>
                            </AnimatePresence>
                     </div>
                     <Popup />
              </div>
       );
};

export default Page;
