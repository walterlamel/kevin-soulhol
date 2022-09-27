const GameCard = ({ name, link, color }) => {
       return (
              <a href={link}>
                     <li
                            className="game-card"
                            style={{ backgroundColor: color }}
                     >
                            <div className="reflect"></div>
                            {name}
                     </li>
              </a>
       );
};

export default GameCard;
