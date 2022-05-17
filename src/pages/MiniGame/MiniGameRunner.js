import React, { useEffect, useState } from "react";

import { GameRunnerProvider } from "../../context/GameRunnerProvider";
import Ennemy from "./Ennemy";
import Player from "./Player";

const MiniGameRunner = () => {
       const [ennemiesPool, setEnnemiesPool] = useState([0]);

       useEffect(() => {
              const interval = setInterval(() => {
                     createEnnemy();
              }, Math.random() * (2000 - 900) + 900);
              return () => clearInterval(interval);
       }, [ennemiesPool]);

       function createEnnemy() {
              let newarr = [...ennemiesPool];
              setEnnemiesPool(false);
              newarr.push(newarr.length);
              setEnnemiesPool(newarr);
       }

       return (
              <GameRunnerProvider>
                     <div className="container-game-runner">
                            <Player />
                            {ennemiesPool &&
                                   ennemiesPool.map((ennemy, k) => (
                                          <Ennemy key={k} />
                                   ))}
                     </div>
              </GameRunnerProvider>
       );
};

export default MiniGameRunner;
