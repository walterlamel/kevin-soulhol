import React, { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
       const [open, setOpen] = useState(false);
       const [inside, setInside] = useState("");
       const [classe, setClasse] = useState("");
       const [loginOpen, setLoginOpen] = useState(false);

       function createPopup(inside, classname) {
              setClasse(classname);
              setOpen(true);
              setInside(inside);
       }

       function toggleLogin(forced_open_or_close = null) {
              if (forced_open_or_close === null) {
                     setLoginOpen(!loginOpen);
              } else {
                     setLoginOpen(forced_open_or_close);
              }
       }

       return (
              <PopupContext.Provider
                     value={{
                            open,
                            setOpen,
                            inside,
                            setInside,
                            classe,
                            setClasse,
                            createPopup,
                            loginOpen,
                            toggleLogin,
                     }}
              >
                     {children}
              </PopupContext.Provider>
       );
};
