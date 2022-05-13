import { useState } from "react";
import { useEffect } from "react";
import Connecter from "../services/Connecter.class";

const useIsConnect = () => {
       const [isConnect, setIsConnect] = useState(false);
       useEffect(() => {
              new Connecter("isConnect").connect_to_api().then((res) => {
                     if (res) {
                            setIsConnect(res.text);
                     }
              });
       });

       return { isConnect };
};

export default useIsConnect;
