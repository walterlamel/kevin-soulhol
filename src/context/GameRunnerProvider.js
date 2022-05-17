import React, { createContext, useState } from "react";

export const GameRunnerContext = createContext();

export const GameRunnerProvider = ({ children }) => {
       const [widthScreen, setWidthScreen] = useState(0);
       const [play, setPlay] = useState(false);
       const [playerPos, setPlayerPos] = useState({});

       return (
              <GameRunnerContext.Provider
                     value={{
                            play,
                            setPlay,
                            playerPos,
                            setPlayerPos,
                            widthScreen,
                            setWidthScreen
                     }}
              >
                     {children}
              </GameRunnerContext.Provider>
       );
};
