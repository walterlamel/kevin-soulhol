import { useDispatch, useSelector } from "react-redux";
import { pauseGame, selectStatut } from "../slices/runnerSlice";

const BtnPause = () => {
  const dispatch = useDispatch();
  const statutGame = useSelector(selectStatut);

  return (
    <>
      {statutGame !== "paused" && (
        <div className="btn-pause" onClick={(e) => dispatch(pauseGame())}>
          Pause
        </div>
      )}
    </>
  );
};

export default BtnPause;
