import React, { createRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import TileMap from "./TileMap";

import Element from "./Element";

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

       useEffect(() => {
              if (ref && ref.current) {
                     setHeightMax(ref.current.clientHeight);
              }
       }, [ref]);

       return (
              <motion.div className="world">
                     <div
                            className="container-tile"
                            style={{ height: heightMax }}
                     >
                            {Map.map((tile, key) => (
                                   <TileMap key={key} />
                            ))}
                            {/* 
                            <Element
                                   img={"pinguin"}
                                   position={{ left: "78%", top: "9%" }}
                            />*/}
                            <div className="bg-world" ref={ref}>
                                   <img src="/images/world.png" alt="" />
                            </div>
                     </div>
              </motion.div>
       );
};

export default World;
