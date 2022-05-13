import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { PopupContext } from "../../context/PopupProvider";

import { Phases, Messages } from "../../data/chatchoices";
import Contact from "../Page/Contact/Contact";
import MessagesBulle from "./MessagesBulle";

const Multichoice = () => {
       const { createPopup } = useContext(PopupContext);
       const [currentPhase, setCurrentPhase] = useState(1);
       const [currentMessages, setCurrentMessages] = useState([]);
       const [currentText, setCurrentText] = useState("");
       const [resAsking, setResAsking] = useState({});

       useEffect(() => {
              displayPhase(currentPhase);
       }, []);

       useEffect(() => {
              let newphrase = Phases[currentPhase].text;
              if (newphrase) {
                     newphrase = transformText(Phases[currentPhase].text);
              }
              setCurrentText(newphrase);
       }, [currentPhase]);

       function displayPhase(phase_id) {
              if (Number.isInteger(phase_id)) {
                     setCurrentMessages([]);
                     setTimeout(() => {
                            let messages = [];
                            Phases[phase_id].choices.forEach((message_id) => {
                                   messages.push(Messages[message_id]);
                                   if (Messages[message_id].input) {
                                          let add_valid =
                                                 Messages["confirmform"];
                                          add_valid.to =
                                                 Messages[message_id].to;
                                          add_valid.name =
                                                 Messages[message_id].name;
                                          messages.push(add_valid);
                                   }
                            });
                            setCurrentMessages(messages);
                            setCurrentPhase(phase_id);

                            if (Phases[phase_id].action) {
                                   do_action(Phases[phase_id].action);
                            }
                     }, 300);
              } else {
                     do_action(phase_id);
              }
       }

       function do_action(name_action) {
              switch (name_action) {
                     default:
                            return;
                     case "contact":
                            createPopup(<Contact />, "popup-contact");
                            break;
              }
       }

       function transformText(text) {
              let regex = /\((.+)\)\[(.+)\]/i;
              text = text.replace(regex, "<a href='$2'>$1</a>");

              regex = /\*(.+)\*/i;
              text = text.replace(regex, "<em>$1</em>");

              //retrouve les variables : $name | $age
              regex = /\$([a-z]+)./;
              let res = regex.exec(text);
              if (res) text = text.replace("$" + res[1], resAsking[res[1]]);

              return text;
       }

       function setResultAsk(message, name, value) {
              if (value && value !== "") {
                     let newitem = Object.assign({}, resAsking);
                     newitem[name] = value;
                     setResAsking(newitem);
                     displayPhase(message.to);
              }
       }

       return (
              <div className="container-multichoices">
                     <p
                            className="container-response"
                            dangerouslySetInnerHTML={{ __html: currentText }}
                     />
                     <div className="container-bulles">
                            <AnimatePresence>
                                   {currentMessages.map((message, key) => (
                                          <motion.div key={key}>
                                                 <MessagesBulle
                                                        message={message}
                                                        onClick={displayPhase}
                                                        setResultAsk={
                                                               setResultAsk
                                                        }
                                                 />
                                          </motion.div>
                                   ))}
                            </AnimatePresence>
                     </div>
              </div>
       );
};

export default Multichoice;
