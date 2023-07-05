import { IWorldElement } from "../types/worldType";

const ElementsWorld: IWorldElement[] = [
  {
    id: "trone_glace",
    name: "Ner'zhul",
    img: "world_trone_glace2_2.gif",
    position: {
      right: "-12px",
      top: "54px",
    },
    action: {
      name: "talk",
      details: "Le froid est mon royaume...",
    },
  },
  {
    id: "ship",
    name: "Navire",
    img: "ship.png",
    position: {
      left: "10px",
      top: "1330px",
      height: "255px",
      width: "auto",
    },
    action: {
      //name: "play",
      //details: "runner",
      name: "talk",
      details: "Vroum, vroum...",
    },
  },
];

export default ElementsWorld;
