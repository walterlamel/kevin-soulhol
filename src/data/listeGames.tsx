import Jumper from "../app/games/jumper/Jumper";
import { Morpion } from "../app/games/morpion/Morpion";
import Runner from "../app/games/runner/Runner";
import { gameType } from "../types/gamesType";

export const listGames: Array<gameType> = [
    {
           name: "Runner",
           link: "/runner",
           color: "pink",
           component: <Runner />,
           visible: false,
           desc: "Petit jeu d'adresse où le but est d'éviter les obstacles et d'attraper les bonus vert. Essayez d'aller le plus loin possible !"
    },
    {
       name: "Morpion",
       link: "morpion",
       component: <Morpion />,
       visible: true,
       desc: "Un simple jeu de morpion classique afin de revisiter les bases"
    },
    {
           name: "Story Helper",
           link: "https://api-story.kevin-soulhol.fr/",
           color: "orange",
           visible: true,
    },
];

export default listGames;