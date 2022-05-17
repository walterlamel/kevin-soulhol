import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import World from "./World/World";
import Menu from "./Menu/Menu";
import Popup from "./Popup";
import Home from "../../pages/Home/Home";
import Account from "../../pages/Account/Account";
import Conversation from "./World/Conversation";

const variants_page = {
       hidden: { opacity: 0 },
       visible: { opacity: 1 },
};

const variants = {
       open: {
              x: 0,
       },
       close: {
              x: "-100%",
       },
};

const Page = () => {
       const [worldOpen, setWorldOpen] = useState(false);
       const [onAccount, setOnAccount] = useState(false);

       useEffect(() => {
              if (window.innerWidth > 1130) {
                     setWorldOpen(true);
              }
       }, []);

       return (
              <AnimatePresence>
                     <motion.div
                            className={
                                   "page " + (onAccount ? "account" : "home")
                            }
                            variants={variants_page}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                     >
                            <Conversation />
                            <motion.div
                                   className="container-world"
                                   variants={variants}
                                   initial={false}
                                   animate={worldOpen ? "open" : "close"}
                            >
                                   <World />
                            </motion.div>
                            <div className="container-page">
                                   <Menu setOnAccount={setOnAccount} />

                                   <AnimatePresence>
                                          <motion.div
                                                 initial={{
                                                        opacity: 0,
                                                        x: 100,
                                                 }}
                                                 animate={{ opacity: 1, x: 0 }}
                                                 exit={{ opacity: 0, x: -10 }}
                                          >
                                                 {onAccount ? (
                                                        <Account />
                                                 ) : (
                                                        <Home />
                                                 )}
                                          </motion.div>
                                   </AnimatePresence>
                            </div>
                            <Popup />
                     </motion.div>
              </AnimatePresence>
       );
};

export default Page;
