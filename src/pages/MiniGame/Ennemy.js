import React, { useContext, useEffect, useRef, useState } from "react";

import { GameRunnerContext } from "../../context/GameRunnerProvider";

const Type = [
       {
              id: "small",
              size: { width: 40, height: 40 },
       },
       {
              id: "smallHeight",
              size: { width: 40, height: 60 },
       },
];

const Ennemy = () => {
       //const {} = useContext(GameRunnerContext);
       const ref = useRef();
       const [posX, setPosX] = useState(1500);
       const [size, setSize] = useState({});
       const [speed, setSpeed] = useState(10);
       const [bords, setBords] = useState({});

       useEffect(() => {
              create();
              const interval = setInterval(() => {
                     move();
              }, speed);
              return () => clearInterval(interval);
       }, []);

       useEffect(() => {
              if (ref && ref.current) {
                     setBords({
                            top: ref.current.offsetTop,
                            bottom:
                                   ref.current.offsetTop +
                                   ref.current.offsetHeight,
                            left: ref.current.offsetLeft,
                            right:
                                   ref.current.offsetLeft +
                                   ref.current.offsetWidth,
                     });
              }
       }, [posX]);

       function create() {
              let rand = Math.floor(Math.random() * (Type.length - 0) + 0);
              setSize(Type[rand].size);
              setSpeed(Math.random() * (Type.length - 50) + 8);
       }

       function move() {
              setPosX((prev) => {
                     prev = prev - 10;
                     if (prev <= 0 - ref.current.offsetWidth) {
                            ref.current.remove();
                            return 0 - ref.current.offsetWidth;
                     } else {
                            return prev;
                     }
              });
       }

       return (
              <div
                     className="ennemy"
                     ref={ref}
                     style={{
                            left: posX,
                            width: size.width,
                            height: size.height,
                     }}
              ></div>
       );
};

export default Ennemy;
