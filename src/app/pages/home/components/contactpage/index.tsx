/**
 *
 * Contact page
 *
 * Display contacts
 *
 */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

const Contactpage = () => {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div className="contactpage otherpage">
        <h2 className="accent">Contacts.</h2>
        <p>
          Si vous voulez me contacter, voici quelques moyens de le faire. Vous
          pouvez aussi essayer de tracer des symboles sur le sol, allumer des
          bougies et les disposer en cercle tout autours puis vous placer au
          centre en psalmodiant des mots alambiqués.
        </p>

        <ul>
          <li>
            <a href={"mailto:" + import.meta.env.VITE_REACT_APP_AUTHOR_EMAIL}>
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              <span>{import.meta.env.VITE_REACT_APP_AUTHOR_EMAIL}</span>
            </a>
          </li>
          <li>
            <a href={"tel:" + import.meta.env.VITE_REACT_APP_AUTHOR_TELEPHONE}>
              <FontAwesomeIcon icon={faPhone} />
              <span>{import.meta.env.VITE_REACT_APP_AUTHOR_TELEPHONE}</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/walterlamel?tab=repositories"
              target="_blanck"
            >
              <img
                src={import.meta.env.REACT_APP_API_USER + "/uploads/github.svg"}
                alt="github"
              />
              <span>Mon Github</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contactpage;
