import Jumper from "../app/games/jumper/Jumper";
import { Morpion } from "../app/games/morpion/Morpion";
import { gameType } from "../types/gamesType";

export const listGames: Array<gameType> = [
    {
           name: "Jumper",
           link: "/jumper",
           color: "pink",
           component: <Jumper />,
           visible: false,
           desc: "Petit jeu de saut très librement inspiré du jeu offline du T-Rex."
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