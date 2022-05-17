import React, { createContext, useState } from "react";

export const ConversationContext = createContext();

const TimeOpened = 100;
const MinTime = 5000;

export const ConversationProvider = ({ children }) => {
       const [open, setOpen] = useState(false);
       const [text, setText] = useState("");
       const [nameTalker, setNameTalker] = useState("");

       async function openConv(text, name) {
              if (text) {
                     if (open) {
                            await closeConv();
                     }

                     setText(text);
                     setNameTalker(name);
                     setOpen(true);

                     let time = text.length * TimeOpened;

                     setTimeout(
                            () => {
                                   closeConv();
                            },
                            time < MinTime ? MinTime : time,
                     );
              }
       }

       async function closeConv() {
              return new Promise((r, f) => {
                     setText("");
                     setNameTalker("");
                     setOpen(false);
                     setTimeout(() => {
                            r(true);
                     }, 500);
              });
       }

       return (
              <ConversationContext.Provider
                     value={{
                            open,
                            openConv,
                            closeConv,
                            text,
                            nameTalker,
                     }}
              >
                     {children}
              </ConversationContext.Provider>
       );
};
