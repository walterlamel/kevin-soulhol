const WindowGame = ({ children, classContain, gameName, desc }) => {
       return (
              <div className={"windowGame " + gameName}>
                     <div className="containName">
                            <div className="surcouche">Game</div>
                            <h2>{gameName}</h2>

                            <div className="descript-game">
                                   <p>{desc}</p>
                            </div>
                     </div>
                     <div
                            className={
                                   "container-window-game" + " " + classContain
                            }
                            //style={size}
                     >
                            {children}
                     </div>
              </div>
       );
};

export default WindowGame;
