import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import WindowGame from "../WindowGame";
import Ennemy from "./Ennemy";
import Player from "./Player";

import options from "./optionRunner";

const Jumper = () => {
       const [isMobile, setIsMobile] = useState(false);
       const [stateGame, setStateGame] = useState(0); // 0 = pause ; 1 = play ; 2 = gameover ;
       const [colisionPlayer, setColisionPlayer] = useState({});
       const [ennemiesPool, setEnnemiesPool] = useState([]);
       const [countForDestructPool, setCountForDistructPool] = useState(0);
       const [score, setScore] = useState(0);
       const [counter, setCounter] = useState(3);
       const [startCounter, setStartCounter] = useState(false);
       const [difficultLevel, setDifficultLevel] = useState(1);
       const [currentSpeedEnnemies, setCurrentSpeedEnnemies] = useState(
              options.speedEnnemy,
       );

       function handleWindowSizeChange() {
              setIsMobile(window.innerWidth <= 768);
       }

       useEffect(() => {
              handleWindowSizeChange();
              window.addEventListener("resize", handleWindowSizeChange);
              return () => {
                     window.removeEventListener(
                            "resize",
                            handleWindowSizeChange,
                     );
              };
       }, []);

       /** creation des ennemis */
       useEffect(() => {
              let appearMax = 2000 - currentSpeedEnnemies * 8;
              let appearMin = 1000 - currentSpeedEnnemies * 8;

              let t = Math.random() * (appearMax - appearMin) + appearMin;

              const interval = setInterval(() => {
                     if (stateGame === 1) {
                            createEnnemy();
                     }
              }, t);
              return () => clearInterval(interval);
       }, [stateGame, ennemiesPool]);

       /** Gere le score */
       useEffect(() => {
              const interval = setInterval(() => {
                     if (stateGame === 1) {
                            setScore((prev) => prev + 1);
                     }
              }, 500);
              return () => clearInterval(interval);
       }, [stateGame]);

       function createEnnemy() {
              let newpool = [...ennemiesPool];
              /*
              if (newpool.length > 5) {
                     newpool.pop();
                     setCountForDistructPool((prev) => prev + 1);
                     if (countForDestructPool >= 2) {
                            setCountForDistructPool(0);
                            newpool = [];
                     }
              }*/
              newpool.push(1);
              setEnnemiesPool(newpool);
       }

       function replay() {
              setTimeout(() => {
                     setStartCounter(true);
                     setEnnemiesPool([]);
              }, 100);
              setTimeout(() => {
                     setStateGame(1);
                     setCounter(3);
                     setStartCounter(false);
                     setScore(0);
              }, 3000);
       }

       /** Gere le compteur de départ */
       useEffect(() => {
              if (startCounter) {
                     const interval = setInterval(() => {
                            setCounter((prev) => prev - 1);
                     }, 1000);
                     return () => clearInterval(interval);
              }
       }, [startCounter]);

       /** Gere le niveau de difficulté */
       useEffect(() => {
              let r = 15;
              setDifficultLevel(Math.floor(score / r) + 1);
       }, [score]);

       /** Augmentation vitesse selon le niveau */
       useEffect(() => {
              setCurrentSpeedEnnemies(
                     difficultLevel * options.augmentationSpeedEnnemyByLevel +
                            options.speedEnnemy,
              );
       }, [difficultLevel]);

       return (
              <WindowGame
                     classContain={options.ClassContainer}
                     size={options.WindowSize}
                     gameName="Runner"
              >
                     {stateGame === 0 && (
                            <div
                                   id="pause-screen"
                                   className="screen"
                                   onClick={(e) => setStateGame(1)}
                            >
                                   Pause
                            </div>
                     )}
                     {stateGame === 3 && (
                            <div
                                   id="gameover-screen"
                                   className="screen"
                                   onClick={(e) => replay()}
                            >
                                   GAME OVER <br /> {counter}
                            </div>
                     )}
                     <div className="score">{score !== 0 ? score : ""}</div>
                     <Player
                            position={options.InitialPosition}
                            setColisionPlayer={setColisionPlayer}
                            puissJump={options.PuissJump}
                            classContain={options.ClassContainer}
                            stateGame={stateGame}
                            isMobile={isMobile}
                     />

                     {ennemiesPool.map((ennemy, key) => (
                            <Ennemy
                                   key={key}
                                   stateGame={stateGame}
                                   setStateGame={setStateGame}
                                   colisionPlayer={colisionPlayer}
                                   currentSpeedEnnemies={currentSpeedEnnemies}
                            />
                     ))}
              </WindowGame>
       );
};

export default Jumper;
