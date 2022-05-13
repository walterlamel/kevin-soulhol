import React, { useEffect, useState } from "react";
import Connecter from "../../services/Connecter.class";

const ListeProjet = () => {
       const [list, setList] = useState([]);

       useEffect(() => {
              new Connecter("get_projets").connect_to_api().then((res) => {
                     if (res && Array.isArray(res.text)) {
                            setList(res.text);
                     }
              });
       }, []);

       return (
              <div className="list-dossier">
                     {list.map((file, key) => (
                            <a href={file.path} className="file" key={key}>
                                   {file.name}
                            </a>
                     ))}
                     {list.length === 0 && (
                            <p>Pas de projets disponibles pour votre compte</p>
                     )}
              </div>
       );
};

export default ListeProjet;
