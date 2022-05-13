import React from "react";

import Infos from "../../../data/infos.json";

const Contact = () => {
       return (
              <div className="container-contact">
                     <div className="contain-photo">
                            <img src="/images/pixel_perso.png" alt="" />
                     </div>
                     <div className="container-text">
                            <span className="nom">
                                   {Infos.nom + " " + Infos.prenom}
                            </span>
                            <span className="email">
                                   <a href={"mailto:" + Infos.mail}>
                                          {Infos.mail}
                                   </a>
                            </span>
                            <span className="tel">
                                   <a href={"tel:" + Infos.tel}>{Infos.tel}</a>
                            </span>
                     </div>
              </div>
       );
};

export default Contact;
