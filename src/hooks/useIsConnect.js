import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
       getSessionFailed,
       getSessionSuccess,
} from "../app/pages/slices/userSlice";

export const useIsConnect = () => {
       const [isConnect, setIsConnect] = useState(false);
       const dispatch = useDispatch();

       useEffect(() => {
              getApi();
       });

       async function getApi() {
              console.log("cherche");
              await fetch(process.env.REACT_APP_API_USER + "isConnect", {
                     credentials: "include",
              })
                     .then((res) => res.json())
                     .then(
                            (data) => {
                                   if (data.user) {
                                          dispatch(
                                                 getSessionSuccess(data.user),
                                          );
                                          setIsConnect(true);
                                   } else {
                                          dispatch(getSessionFailed());
                                          setIsConnect(false);
                                   }
                            },
                            (err) => {
                                   console.log(err);
                                   setIsConnect(false);
                                   dispatch(getSessionFailed());
                            },
                     );
       }

       return { isConnect };
};

export default useIsConnect;
