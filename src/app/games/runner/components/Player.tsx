import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import {
  changeColisonPlayer,
  positionType,
  selectStatut,
} from "../slices/runnerSlice";

const Player = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const statutGame = useSelector(selectStatut);
  const WindowSize = document.querySelector(".container-jumper");
  const ScreenSize = document.querySelector("body")?.clientWidth;
  const [positionX, setPositionX] = useState<number>(150);
  const [action, setAction] = useState<"stable" | "left" | "right">("stable");
  const [test, settest] = useState<any>(0);
  const [positionMaxRight, setPositionMaxRight] = useState<number>(0);
  const [targetPositionTouch, setTargetPositionTouch] = useState<number | null>(
    null
  );

  //Gere le suivi de la souris sur l'ordi (sur mobile, c'est le drag de framer-motion qui gère)
  function handleMoveMouse(e: MouseEvent) {
    if (ScreenSize && WindowSize) {
      let margepercent = 20;
      let percent: number = 0;
      let position = e.clientX;
      percent =
        ((position - (margepercent / 100) * ScreenSize) /
          (ScreenSize - (margepercent / 100) * ScreenSize)) *
        100;
      setPositionX((percent / 100) * WindowSize?.clientWidth);
    }
  }

  //prend en compte le suivi du doigt
  function handleMoveTouch(e: TouchEvent) {
    setTargetPositionTouch(e.touches[0].clientX);
  }

  //Gere le mouvement mobile
  useEffect(() => {
    if (targetPositionTouch && isMobile) {
      let diff = Math.floor(targetPositionTouch - positionX) - 50; //50 est là pour bien retomber sous le doigt
      let speed = 1 + Math.abs(diff / 200);

      if (diff < 0) {
        setPositionX((prev) => prev - speed);
      } else if (diff > 0) {
        setPositionX((prev) => prev + speed);
      }
    }
  }, [targetPositionTouch, positionX, isMobile]);

  //empeche d'aller hors de l'écran
  useEffect(() => {
    if (positionMaxRight) {
      if (positionX <= 0) {
        setPositionX(0);
      } else if (positionX >= positionMaxRight) {
        setPositionX(positionMaxRight);
      }
    }
  }, [positionX]);

  //enregistre les endroits de colisions  du joueur
  useEffect(() => {
    if (ref && ref.current) {
      let marge = 0;
      let newcolision: positionType = {
        left: ref.current.offsetLeft - marge,
        right: ref.current.offsetLeft + ref.current.clientWidth + marge,
        top: ref.current.offsetTop + 5 - marge, //ajout de 5 pour simplifier légèrement la partie
        bottom: ref.current.offsetTop + ref.current.clientHeight + marge,
      };
      dispatch(changeColisonPlayer(newcolision));
    }
  }, [ref, positionX]);

  //prepare le max possible pour le player pour aller sur l'écran à droite
  useEffect(() => {
    if (WindowSize && ref && ref.current) {
      setPositionMaxRight(WindowSize?.clientWidth - ref.current?.clientWidth);
    }
  }, [ref, WindowSize]);

  //Add EVENT Listener Desktop
  useEffect(() => {
    if (!isMobile && statutGame === "started") {
      window.addEventListener("mousemove", handleMoveMouse);
    }
    return () => {
      window.removeEventListener("mousemove", handleMoveMouse);
    };
  }, [WindowSize, positionX, statutGame]);

  //Add Event Listener MOBILE
  useEffect(() => {
    if (isMobile && statutGame === "started") {
      window.addEventListener("touchmove", handleMoveTouch);
      window.addEventListener("touchend", (e) => {
        setTargetPositionTouch(null);
      });
    }

    return () => {
      window.removeEventListener("touchmove", handleMoveTouch);
    };
  }, [positionX, targetPositionTouch, statutGame]);

  return (
    <div className="space-drag">
      <motion.div
        className="player"
        ref={ref}
        style={{ left: positionX }}
      ></motion.div>
    </div>
  );
};

export default Player;
