import { faBomb, faPoo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rowType } from "../slices/morpionSlice";

const SymbolePlayer = ({ player }: { player: rowType }) => {
  function switcher() {
    switch (player) {
      default:
        return "";
      case 1:
        return <FontAwesomeIcon icon={faPoo} />;
      case 2:
        return <FontAwesomeIcon icon={faBomb} />;
    }
  }

  return <>{switcher()}</>;
};

export default SymbolePlayer;
