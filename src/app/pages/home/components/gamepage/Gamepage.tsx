/**
 * 
 * Game page
 * 
 * Display all game
 * 
 */

import GameCard from "./GameCard";


 const games = [
    {
           name: "Jumper",
           link: "/jumper",
           color: "pink",
           visible: true,
    },
    {
           name: "Aide aux scenari",
           link: "http://api-story.kevin-soulhol.fr/",
           color: "orange",
           visible: true,
    },
];


const Gamepage = () => {
    return (
        <div className="gamepage">
            <h2 className="accent">Jeux.</h2>
            <ul>
            {games.map((game) => {
                                          if (game.visible)
                                                 return (
                                                        <GameCard
                                                               name={game.name}
                                                               link={game.link}
                                                               color={
                                                                      game.color
                                                               }
                                                        />
                                                 );
                                   })}

            </ul>
        </div>
    )
}


export default Gamepage;