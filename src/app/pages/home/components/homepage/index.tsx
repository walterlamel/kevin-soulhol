/**
 *
 * Home page
 *
 * Display main element of the site
 *
 */
import React from "react";
import { Link } from "react-router-dom";
import { allPages } from "../../../../../types/pagesType";
import Multichoice from "../chatBox/Multichoice";
import Experiences from "../experiences/Experiences";
import ListeWorkCards from "../works/ListeWorkCards";

const Homepage = () => {
  return (
    <>
      <section>
        <h2 className="accent">Bonjour.</h2>
        <p>Je m'appelle Kévin Soulhol. Je suis développeur web et graphiste.</p>
        <h2>
          Que puis-je faire
          <br /> pour vous ?
        </h2>
        <Multichoice />
      </section>

      <section id="works">
        <h3>
          Des <span className="accent">projets</span> par millier
        </h3>
        <p className="sous-paraph">
          Ci-dessous, vous pourrez découvrir quelques-uns des projets sur
          lesquels j'ai travaillé. Du graphisme, des sites web, un peu
          d'illustration...
          <br />
          <Link to={allPages[5].link}>Cliquez ici, pour tous les voir.</Link>
        </p>
        <ListeWorkCards />
      </section>
      <section>
        <h3>
          Mon <span className="accent">parcours</span> pro
        </h3>
        <p className="sous-paraph">
          Si mes expériences vous intéressent, les voici dans l'ordre
          chronologique.
        </p>
        <Experiences />
      </section>
    </>
  );
};

export default Homepage;
