/**
 *
 * Jeu du Morpion
 *
 *
 * Affiche et gère l'ensemble du jeu de Morpion
 *
 */

import { Provider } from "react-redux";
import WindowGame from "../WindowGame";
import Grille from "./components/Grille";
import store from "./store";
import Points from "./components/Points";
import listGames from "../../../data/listeGames";
import BackgroundColor from "./components/BackgroundColor";

export const Morpion = () => {
  return (
    <WindowGame
      classContain="game-morpion"
      gameName={listGames[1].name}
      desc={listGames[1].desc}
    >
      <Provider store={store}>
        <Grille />
        <Points />
        <BackgroundColor />
      </Provider>
    </WindowGame>
  );
};
