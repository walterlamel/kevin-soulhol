import React, { useContext } from "react";

import Contact from "../Contact/Contact";

import { PopupContext } from "../../../context/PopupProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
       faEnvelopeOpenText,
       faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import Login from "../../Login/Login";

import useIsConnect from "../../../hooks/useIsConnect";

const Menu = ({ setOnAccount }) => {
       const { createPopup, loginOpen, toggleLogin } = useContext(PopupContext);
       const { isConnect } = useIsConnect();

       return (
              <div className="menu">
                     <ul>
                            <li
                                   className="menu-item"
                                   onClick={(e) => setOnAccount(false)}
                            >
                                   <div className="icon">
                                          <FontAwesomeIcon
                                                 icon={faEnvelopeOpenText}
                                          />
                                   </div>
                                   <span>Accueil</span>
                            </li>
                            <li
                                   className="menu-item"
                                   onClick={(e) =>
                                          createPopup(
                                                 <Contact />,
                                                 "popup-contact",
                                          )
                                   }
                            >
                                   <div className="icon">
                                          <FontAwesomeIcon
                                                 icon={faEnvelopeOpenText}
                                          />
                                   </div>
                                   <span>Contacts</span>
                            </li>
                            {isConnect ? (
                                   <li
                                          className="menu-item container-connect-session"
                                          onClick={(e) => setOnAccount(true)}
                                   >
                                          <div className="icon">
                                                 <FontAwesomeIcon
                                                        icon={faUserAstronaut}
                                                 />
                                          </div>
                                          <div className="container-text">
                                                 <span className="identifiant">
                                                        ??
                                                 </span>
                                                 <span>??</span>
                                          </div>
                                   </li>
                            ) : (
                                   <li
                                          className="menu-item"
                                          onClick={(e) => toggleLogin()}
                                   >
                                          <div className="icon">
                                                 <FontAwesomeIcon
                                                        icon={faUserAstronaut}
                                                 />
                                          </div>
                                          <span>Se connecter</span>
                                   </li>
                            )}
                     </ul>
                     {loginOpen && <Login opener={loginOpen} />}
              </div>
       );
};

export default Menu;
