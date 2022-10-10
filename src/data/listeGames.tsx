import { gameType } from "../types/gamesType";

export const listGames: Array<gameType> = [
    {
           name: "Jumper",
           link: "/jumper",
           color: "pink",
           visible: false,
    },
    {
           name: "Aide aux scenari",
           link: "http://api-story.kevin-soulhol.fr/",
           color: "orange",
           visible: true,
    },
];

export default listGames;