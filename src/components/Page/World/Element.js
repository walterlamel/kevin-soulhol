import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ConversationContext } from "../../../context/ConversationProvider";

const Element = ({ elem }) => {
       const navigate = useNavigate();
       const { openConv } = useContext(ConversationContext);

       function handleClick() {
              if (elem.action) {
                     switch (elem.action.name) {
                            default:
                                   break;
                            case "talk":
                                   openConv(elem.action.details, elem.name);
                                   break;
                            case "play":
                                   navigate(elem.action.details);
                                   break;
                     }
              }
       }

       return (
              <div
                     className="element"
                     style={elem.position}
                     onClick={handleClick}
              >
                     <img src={"/images/" + elem.img + ".gif"} alt="" />
              </div>
       );
};

export default Element;
