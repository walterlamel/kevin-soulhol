import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import {
  gameOver,
  missBonus,
  positionType,
  selectColisionPlayer,
  selectLevel,
  selectStatut,
  takeBonus,
} from "../slices/runnerSlice";
import { optionsRunner } from "../slices/runnerSlice";

const Ennemy = ({ index, destroy }: { index: number; destroy: Function }) => {
  const Window = document.querySelector(".container-jumper");
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [positionX, setPositionX] = useState<number>(
    Math.random() * (95 - 5) + 5
  );
  const [positionY, setPositionY] = useState<number>(
    optionsRunner.EnnemyInitialPositionY
  );
  const [isBonus, setIsBonus] = useState<boolean>(false);
  const [size, setSize] = useState<number>(
    Math.floor(
      Math.random() *
        (optionsRunner.EnnemyMaxSize - optionsRunner.EnnemyMinSize) +
        optionsRunner.EnnemyMinSize
    )
  );
  const [speed, setSpeed] = useState<number>(optionsRunner.EnnemyinitialSpeed);
  const [colisionEnnemy, setColisionEnnemy] = useState<positionType>({
    left: positionX,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [action, setAction] = useState<
    "fall" | "pause" | "destruct" | "touched"
  >("fall");
  const statutGame = useSelector(selectStatut);
  const colisionPlayer = useSelector(selectColisionPlayer);

  //le transforme en bonus selon le pourcentage de chance
  useEffect(() => {
    interface randInsideType {
      chance: number;
      value: boolean;
    }
    type randType = randInsideType[];

    let randArray: randType = [
      { chance: optionsRunner.percentAppearBonus, value: true },
      { chance: 100 - optionsRunner.percentAppearBonus, value: false },
    ];

    const initialValue = 0;
    const sumWithInitial = randArray.reduce(
      (previousValue, currentValue) => currentValue.chance + previousValue,
      initialValue
    );
    //const sumValue:number = Object.values(randArray).reduce((a, b) => a + b);
    let cumul = 0;
    let rand = Math.floor(Math.random() * (sumWithInitial - cumul) + cumul);
    let res: boolean = false;
    for (let index = 0; index < randArray.length; index++) {
      const element = randArray[index];
      cumul += element.chance;
      if (rand < cumul) {
        res = element.value;
        break;
      }
    }
    setIsBonus(res);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timer;

    switch (action) {
      case "fall":
        interval = setInterval(() => {
          fall();
        }, 10);
        break;
      case "destruct":
        destroy(index);
        break;
      default:
        break;
    }

    return () => {
      clearInterval(interval);
    };
  }, [action]);

  function fall() {
    setPositionY((prev) => prev + speed);
  }

  //detruit l'élément quand il est hors du champs
  useEffect(() => {
    if (
      Window &&
      Window.clientHeight &&
      positionY >= Window.clientHeight + 50
    ) {
      setAction("destruct");

      if (isBonus) {
        dispatch(missBonus());
      }
    }
  }, [positionY, Window]);

  //Gere la réaction par rapport au statut de la game
  useEffect(() => {
    switch (statutGame) {
      case "paused":
      case "gameover":
        setAction("pause");
        break;
      case "started":
        setAction("fall");
        break;
    }
  }, [statutGame]);

  //Capte la colision avec le player
  useEffect(() => {
    if (ref && ref.current) {
      if (
        colisionEnnemy.bottom >= colisionPlayer.top &&
        colisionEnnemy.right >= colisionPlayer.left &&
        colisionEnnemy.left <= colisionPlayer.right &&
        colisionEnnemy.top <= colisionPlayer.bottom
      ) {
        if (!isBonus) {
          setAction("touched");
          dispatch(gameOver());
        } else {
          dispatch(takeBonus());
          setAction("destruct");
        }
      }
    }
  }, [ref, positionY, colisionPlayer]);

  //creation de la colision de l'ennemy
  useEffect(() => {
    if (ref && ref.current) {
      let colision = {
        left: ref.current.offsetLeft,
        right: ref.current.offsetLeft + ref.current.clientWidth,
        top: ref.current.offsetTop,
        bottom: ref.current.offsetTop + ref.current.clientHeight,
      };
      setColisionEnnemy(colision);
    }
  }, [ref, positionX, positionY]);

  return (
    <div
      className={
        "ennemy " +
        (action === "touched" ? "touched" : "") +
        " " +
        (isBonus ? "bonus" : "")
      }
      ref={ref}
      style={{
        top: positionY,
        left: positionX + "%",
        width: isBonus ? optionsRunner.sizeBonus : size,
      }}
    ></div>
  );
};

export default Ennemy;
