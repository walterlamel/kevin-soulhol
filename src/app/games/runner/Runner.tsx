import { Provider,  } from "react-redux";
import listGames from "../../../data/listeGames";
import WindowGame from "../WindowGame";
import BtnPause from "./components/BtnPause";
import ContainerEnnemies from "./components/ContainerEnnemies";
import Player from "./components/Player";
import Score from "./components/Score";
import Screen from "./components/Screen";
import storeRunner from "./store";

const Runner = ( ) => {


    return (
        <WindowGame classContain="container-jumper" gameName={listGames[0].name} desc={listGames[0].desc}>
            <Provider store={storeRunner}>
                    <Screen />
                    <ContainerEnnemies />
                    <Player />
                    <Score />
                    <div className="contain-btn">
                        <BtnPause />
                    </div>
            </Provider>
        </WindowGame>
    )
}

export default Runner;