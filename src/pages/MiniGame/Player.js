import React, { useState, useEffect } from "react";

const SpeedJump = 10;
const MaxHauteur = 250;

const Player = () => {
       const [posY, setPosY] = useState(0);
       const [inJump, setInJump] = useState(false);

       useEffect(() => {
              window.addEventListener("keydown", handleKey);
              window.addEventListener("keyup", handleKey);
       }, []);

       useEffect(() => {
              let interval = null;
              if (!inJump) {
                     interval = setInterval(() => {
                            setPosY((prev) => prev - SpeedJump / 2);
                     }, 10);
              }
              return () => clearInterval(interval);
       }, []);

       useEffect(() => {
              let interval = null;
              if (inJump) {
                     interval = setInterval(() => {
                            setPosY((prev) => prev + SpeedJump);
                     }, 10);
              }
              return () => clearInterval(interval);
       }, [inJump, posY]);

       useEffect(() => {
              if (posY <= 0) {
                     setPosY(0);
              } else if (posY >= MaxHauteur) {
                     setPosY(MaxHauteur);
              }
       }, [posY]);

       function handleKey(e) {
              if (e.code !== "Space") {
                     return;
              }

              if (e.type === "keydown") {
                     setInJump(true);
              }

              if (e.type === "keyup") {
                     setInJump(false);
              }
       }

       return (
              <div
                     className="player"
                     style={{
                            bottom: posY,
                     }}
              ></div>
       );
};

export default Player;
