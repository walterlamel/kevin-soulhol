import React, { createRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import TileMap from "./TileMap";

import Element from "./Element";

import ElementsWorld from "../../../data/elementsworld";

const Map = [
       {
              type: "water",
       },
       {
              type: "water",
       },
       {
              type: "water",
       },
       {
              type: "water",
       },
       {
              type: "water",
       },
       {
              type: "water",
       },
       {
              type: "water",
       },
];

const World = () => {
       const ref = createRef();
       const [heightMax, setHeightMax] = useState(0);
       const [allElements, setAllElements] = useState(ElementsWorld);

       useEffect(() => {
              if (ref && ref.current) {
                     setHeightMax(ref.current.clientHeight);
              }
       }, [ref]);

       useEffect(() => {
              setAllElements(allElements);
       }, [ElementsWorld]);

       return (
              <motion.div className="world">
                     <div
                            className="container-tile"
                            style={{ height: heightMax }}
                     >
                            {Map.map((tile, key) => (
                                   <TileMap key={key} />
                            ))}

                            {ElementsWorld.map((elem, key) => (
                                   <Element elem={elem} key={key} />
                            ))}

                            <div className="bg-world" ref={ref}>
                                   <img src="/images/world.png" alt="" />
                            </div>
                     </div>
              </motion.div>
       );
};

export default World;
