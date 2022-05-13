import React, { createContext, useEffect, useState } from "react";
import Connecter from "../services/Connecter.class";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
       const [pseudo, setPseudo] = useState("");
       const [connect, setConnect] = useState(false);
       const [meta, setMeta] = useState({});

       useEffect(() => {
              new Connecter("get_meta").connect_to_api().then((res) => {
                     if (res && res.text) {
                            setMeta(meta);
                     }
              });
       }, []);

       function deco() {
              new Connecter("deco").connect_to_api().then((res) => {
                     window.location = "/";
              });
       }

       return (
              <SessionContext.Provider
                     value={{
                            pseudo,
                            setPseudo,
                            deco,
                            connect,
                            setConnect,
                     }}
              >
                     {children}
              </SessionContext.Provider>
       );
};
