import React, { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
       const [open, setOpen] = useState(false);
       const [inside, setInside] = useState("");
       const [classe, setClasse] = useState("");

       function createPopup(inside, classname) {
              setClasse(classname);
              setOpen(true);
              setInside(inside);
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
                     }}
              >
                     {children}
              </PopupContext.Provider>
       );
};
