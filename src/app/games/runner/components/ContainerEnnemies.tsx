import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addScore,
  selectSpeedAppearEnnemy,
  selectStatut,
} from "../slices/runnerSlice";
import Ennemy from "./Ennemy";

const ContainerEnnemies = () => {
  const dispatch = useDispatch();
  const statutGame = useSelector(selectStatut);
  const timeBetweenEnnemies = useSelector(selectSpeedAppearEnnemy);
  const [ennemies, setEnnemies] = useState<Array<number>>([]);
  const [lastIndex, setLastIndex] = useState<number>(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (statutGame === "started") {
        createEnnemy();
      }
    }, timeBetweenEnnemies);

    return () => clearInterval(interval);
  }, [ennemies, statutGame]);

  function createEnnemy() {
    let newEnnemies = [...ennemies];
    newEnnemies.push(lastIndex);
    setLastIndex((prev) => prev + 1);
    setEnnemies(newEnnemies);
  }

  function destructEnnemy(key: number) {
    setEnnemies((prev) => prev.filter((v) => v !== key));
    dispatch(addScore());
  }

  useEffect(() => {
    if (statutGame === "started") {
      setEnnemies([]);
    }
  }, [statutGame]);

  return (
    <div className="container-ennemies">
      {ennemies.map((e, k) => (
        <Ennemy key={e} index={e} destroy={destructEnnemy} />
      ))}
    </div>
  );
};

export default ContainerEnnemies;
