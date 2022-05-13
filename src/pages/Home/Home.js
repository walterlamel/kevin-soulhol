import React from "react";

import Page from "../../components/Page/Page";
import ListeWorkCards from "../../components/WorkCard/ListeWorkCards";
import Experiences from "../../components/Experiences/Experiences";
import Multichoice from "../../components/MultiChoice/Multichoice";
import { AnimatePresence } from "framer-motion";

const Home = () => {
       return (
              <Page classname="home">
                     <section>
                            <h2 className="accent">Bonjour.</h2>
                            <p>
                                   Je m'appelle Kévin Soulhol. Je suis
                                   développeur web et graphiste.
                            </p>
                            <h2>
                                   Que puis-je faire
                                   <br /> pour vous ?
                            </h2>
                            <Multichoice />
                     </section>

                     <section id="works">
                            <h3>
                                   Des <span className="accent">projets</span>{" "}
                                   par millier
                            </h3>
                            <p className="sous-paraph">
                                   Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod
                                   tempor invidunt ut labore et dolore
                            </p>
                            <ListeWorkCards />
                     </section>
                     <section>
                            <h3>
                                   Mon <span className="accent">parcours</span>{" "}
                                   pro
                            </h3>
                            <p className="sous-paraph">
                                   Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod
                                   tempor invidunt ut labore et dolore
                            </p>
                            <Experiences />
                     </section>
              </Page>
       );
};

export default Home;
