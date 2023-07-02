import Hangman from "../app/games/hangman/Hangman";
import { Morpion } from "../app/games/morpion/Morpion";
import Runner from "../app/games/runner/Runner";
import { gameType } from "../types/gamesType";

export const listGames: Array<gameType> = [
  {
    name: "Runner",
    link: "/runner",
    color: "pink",
    component: <Runner />,
    visible: true,
    desc: "Petit jeu d'adresse où le but est d'éviter les obstacles et d'attraper les bonus vert. Essayez d'aller le plus loin possible !",
  },
  {
    name: "Morpion",
    link: "morpion",
    component: <Morpion />,
    visible: true,
    desc: "Un simple jeu de morpion classique afin de revisiter les bases",
  },
  {
    name: "Hangman",
    link: "hangman",
    component: <Hangman />,
    visible: true,
    desc: "Le jeu du pendu, tout simplement : trouvez le mot secret en trouvant les lettres qui le composent. Attention, il y a un nombre d'erreur limité.",
  },
];

export default listGames;
