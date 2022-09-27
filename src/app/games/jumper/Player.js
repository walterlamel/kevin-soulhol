import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

import options from "./optionRunner";

const Player = ({
       position,
       puissJump,
       classContain,
       stateGame,
       isMobile,
       setColisionPlayer,
}) => {
       const thisElement = useRef(null);
       const [positionY, setPositionY] = useState(position.y);
       const [speedPlayer, setSpeedPlayer] = useState(0);
       const [stateJump, setStateJump] = useState(0); // 1 = monte ; 2 = descend ; 0 = rien
       const [maxHeight, setMaxHeight] = useState(0);

       useEffect(() => {
              //preparation des options
              setMaxHeight(
                     document.querySelector("." + classContain).clientHeight,
              );

              //ajout du Keypress
              if (stateJump !== 0) {
                     return;
              }

              if (stateGame === 1) {
                     if (!isMobile) {
                            window.addEventListener("keypress", handleKeyPress);
                     } else {
                            window.addEventListener("click", handleKeyPress);
                     }
              }

              return () => {
                     if (!isMobile) {
                            window.removeEventListener(
                                   "keypress",
                                   handleKeyPress,
                            );
                     } else {
                            window.removeEventListener("click", handleKeyPress);
                     }
              };
       }, [isMobile, stateGame, stateJump]);

       /** Utilise constamment le speedPlayer */
       useEffect(() => {
              const interval = setInterval(() => {
                     setPositionY((prev) => prev + speedPlayer);
              }, 1);
              return () => clearInterval(interval);
       }, [speedPlayer]);

       /** Gere les différents états de saut */
       useEffect(() => {
              if (stateGame !== 0) {
                     if (stateJump === 1) {
                            //monte
                            const interval = setInterval(() => {
                                   setSpeedPlayer(
                                          (prev) =>
                                                 prev +
                                                 (options.speedJump / 100) * 5,
                                   );
                                   if (
                                          positionY >=
                                          (puissJump / 100) * (maxHeight / 3.5)
                                   ) {
                                          setStateJump(2);
                                   }
                            }, 10);
                            return () => clearInterval(interval);
                     } else if (stateJump === 2) {
                            //descend
                            const interval = setInterval(() => {
                                   setSpeedPlayer(
                                          (prev) =>
                                                 prev -
                                                 (options.speedJump / 100) * 3,
                                   );
                                   if (positionY <= 0) {
                                          setStateJump(0);
                                          setSpeedPlayer(0);
                                          setPositionY(0);
                                   }
                            }, 10);
                            return () => clearInterval(interval);
                     } else if (stateJump === 0) {
                            //rien
                            setSpeedPlayer(0);
                     }
              }
       }, [stateJump, positionY, stateGame]);

       /** Protection pour le cas où le player dépasse */
       useEffect(() => {
              if (positionY < 0) {
                     setPositionY(0);
              }

              if (positionY > maxHeight) {
                     setStateJump(2);
              }
       }, [positionY]);

       /** Enregistre la position de la colision */
       useEffect(() => {
              setColisionPlayer({
                     left: thisElement.current.offsetLeft,
                     right:
                            thisElement.current.offsetLeft +
                            thisElement.current.clientWidth,
                     bottom: positionY,
                     top: positionY + thisElement.current.clientHeight,
              });
       }, [positionY]);

       //en cas de PAUSE
       useEffect(() => {
              if (stateGame !== 1) {
                     setSpeedPlayer(0);
                     setStateJump(0);
              }

              if (stateGame === 1) {
                     setStateJump(2);
              }

              if (stateGame === 2) {
                     setStateJump(2);
                     setSpeedPlayer(0);
              }
       }, [stateGame]);

       function handleKeyPress(e) {
              if (isMobile) {
                     if (stateJump === 0) {
                            setStateJump(1);
                     }
              } else {
                     if (e.key === " " && stateJump === 0) {
                            setStateJump(1);
                     }
              }
       }

       return (
              <div
                     id="player"
                     style={{ bottom: positionY, left: position.x + "%" }}
                     ref={thisElement}
              ></div>
       );
};

export default Player;
