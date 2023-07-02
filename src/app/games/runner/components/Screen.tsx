import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import {
  pauseGame,
  restartGame,
  selectBonusCatched,
  selectBonusMissed,
  selectScore,
  selectStatut,
  startGame,
} from "../slices/runnerSlice";

const TOUCH_START = " ";
const TOUCH_PAUSE = "Escape";

const Screen = () => {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const bonusCatched = useSelector(selectBonusCatched);
  const bonusMissed = useSelector(selectBonusMissed);
  const statutGame = useSelector(selectStatut);

  function handleKeyPress(e: KeyboardEvent) {
    switch (e.key) {
      case TOUCH_START:
        runGame();
        break;
      case TOUCH_PAUSE:
        pause();
        break;
    }
  }

  function runGame() {
    dispatch(startGame());
  }

  function restart(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    let target: HTMLDivElement = e.target as HTMLDivElement;
    if (target.id !== "share-btn") {
      dispatch(restartGame());
    }
  }

  function pause() {
    dispatch(pauseGame());
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      {statutGame === "paused" && (
        <div className="screen paused" onClick={runGame}>
          <p className="statut">Pause</p>
          <p className="details">
            {isMobile ? "Touch " : "Press space "} for start
          </p>
        </div>
      )}
      {statutGame === "gameover" && (
        <div className="screen gameover" onClick={(e) => restart(e)}>
          <p className="statut">GAME OVER</p>
          <p className="details">
            {isMobile ? "Touch " : "Press space "} for restart
          </p>
          <div className="contain-infos-game">
            <table>
              <tr>
                <td>Score</td>
                <td>{score}</td>
              </tr>
              <tr>
                <td>Bonus attrapés </td>
                <td>{bonusCatched}</td>
              </tr>
              <tr>
                <td>Bonus ratés </td>
                <td>{bonusMissed}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Screen;
