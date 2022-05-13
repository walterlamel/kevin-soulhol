import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import Page from "../../components/Page/Page";

import { SessionContext } from "../../context/SessionProvider";
import useIsConnect from "../../hooks/useIsConnect";
import AddAccount from "./AddAccount";
import ListeProjet from "./ListeProjet";

const Account = () => {
       const { deco } = useContext(SessionContext);
       const { isConnect } = useIsConnect();

       return (
              <Page classname="account">
                     <section>
                            <h2>Votre Compte</h2>
                            {isConnect ? (
                                   <>
                                          <p>
                                                 Ici vous trouverez les
                                                 informations relatives à votre
                                                 compte personnel.
                                          </p>
                                   </>
                            ) : (
                                   <p>Vous devez être connecté</p>
                            )}
                     </section>
                     {isConnect && (
                            <section>
                                   <h3>
                                          Projets{" "}
                                          <span className="accent">
                                                 disponibles
                                          </span>
                                   </h3>
                                   <ListeProjet />
                                   <AddAccount />
                            </section>
                     )}
                     {isConnect && <div onClick={deco}>Se déconnecter</div>}
              </Page>
       );
};

export default Account;
