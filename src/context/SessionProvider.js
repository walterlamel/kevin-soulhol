import React, { createContext, useState } from "react";
import Connecter from "../services/Connecter.class";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
       const [pseudo, setPseudo] = useState("");
       const [connect, setConnect] = useState(false);

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
