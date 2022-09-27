import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import options from "./optionRunner";

const Ennemy = ({
       stateGame,
       colisionPlayer,
       setStateGame,
       currentSpeedEnnemies,
}) => {
       const [positionX, setPositionX] = useState(0);
       const [size, setSize] = useState({});
       const thisElement = useRef();
       const [currentSpeed, setCurrentSpeed] = useState(
              stateGame === 1 ? currentSpeedEnnemies : 0,
       );
       const [colisionEnnemy, setColisionEnnemy] = useState({});

       /** creation de l'element - choix de la taille*/
       useEffect(() => {
              setSize({
                     width:
                            Math.random() *
                                   (options.ennemyWidth[
                                          options.ennemyHeight.length - 1
                                   ] -
                                          options.ennemyWidth[0]) +
                            options.ennemyWidth[0],
                     height:
                            Math.random() *
                                   (options.ennemyHeight[
                                          options.ennemyHeight.length - 1
                                   ] -
                                          options.ennemyHeight[0]) +
                            options.ennemyHeight[0],
              });
       }, []);

       /** Gere le mouvement */
       useEffect(() => {
              const interval = setInterval(() => {
                     setPositionX((prev) => prev + (currentSpeed / 100) * 30);
              }, 10);
              return () => clearInterval(interval);
       }, [currentSpeed]);

       /** En cas de pause */
       useEffect(() => {
              if (stateGame === 1) {
                     setCurrentSpeed(currentSpeedEnnemies);
              } else {
                     setCurrentSpeed(0);
              }
       }, [stateGame]);

       /** Met à jour la colision de cet ennemy */
       useEffect(() => {
              setColisionEnnemy({
                     right:
                            thisElement.current.offsetLeft +
                            thisElement.current.clientWidth,
                     left: thisElement.current.offsetLeft,
                     top: thisElement.current.offsetHeight,
                     bottom:
                            thisElement.current.offsetHeight -
                            thisElement.current.clientHeight,
                     current: thisElement.current,
              });
       }, [colisionPlayer, positionX]);

       /** Gere les colisions */
       useEffect(() => {
              if (
                     colisionPlayer.right + 5 >= colisionEnnemy.left &&
                     colisionPlayer.bottom <= colisionEnnemy.top &&
                     colisionPlayer.left <= colisionEnnemy.right
              ) {
                     setStateGame(3);
              }
       }, [colisionPlayer, colisionEnnemy, positionX]);

       /** fait disparaitre l'ennemy quand il sort assez de l'écran */
       useEffect(() => {
              if (positionX > 2500) {
                     //thisElement.current.remove();
                     setCurrentSpeed(0);
              }
       }, [positionX]);

       return (
              <div
                     className="ennemy"
                     style={{
                            right: positionX,
                            width: size.width,
                            height: size.height,
                     }}
                     ref={thisElement}
              ></div>
       );
};

export default Ennemy;
