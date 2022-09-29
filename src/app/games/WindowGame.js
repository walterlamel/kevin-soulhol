const WindowGame = ({ children, classContain, size, gameName }) => {
       return (
              <div className="windowGame">
                     <div className="containName">
                            <div className="surcouche">Game</div>
                            <h2>{gameName}</h2>

                            <div className="descript-game">
                                   <p>
                                          Petit jeu de saut très librement
                                          inspiré du jeu offline du T-Rex.
                                   </p>
                            </div>
                     </div>
                     <div
                            className={
                                   "container-window-game" + " " + classContain
                            }
                            style={size}
                     >
                            {children}
                     </div>
              </div>
       );
};

export default WindowGame;
