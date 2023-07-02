/**
 *
 * Game page
 *
 * Display all game
 *
 */
import React from "react";
import GameCard from "./GameCard";

import listGames from "../../../../../data/listeGames";
import { Helmet } from "react-helmet-async";

const Gamepage = () => {
  return (
    <>
      <Helmet>
        <title>Jeux</title>
      </Helmet>
      <div className="gamepage otherpage">
        <h2 className="accent">Jeux.</h2>
        <p>
          Ici, vous trouverez quelques-uns des petits jeux que j'ai pu essayé de
          faire. Ceux sont surtout un entraînement mais ils sont utilisables.
        </p>
        <ul>
          {listGames.map((game) => {
            if (game.visible)
              return (
                <GameCard
                  name={game.name}
                  link={game.link}
                  color={game.color}
                />
              );
          })}
        </ul>
      </div>
    </>
  );
};

export default Gamepage;
