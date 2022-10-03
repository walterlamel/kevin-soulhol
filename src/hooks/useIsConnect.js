import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
       getSession,
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
              dispatch(getSession());
              await fetch(process.env.REACT_APP_API_USER + "isConnect", {
                     credentials: "include",
              })
                     .then((res) => res.json())
                     .then(
                            (data) => {
                                   console.log(data);
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
