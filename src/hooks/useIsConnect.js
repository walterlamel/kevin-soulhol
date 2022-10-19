import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
       getSession,
       getSessionFailed,
       getSessionSuccess,
} from "../app/pages/slices/userSlice";
import useIsAdmin from "./hooksSession";

export const useIsConnect = () => {
       const [isConnect, setIsConnect] = useState(false);
       const dispatch = useDispatch();
       const [id, setId] = useState(null);
       const [prenom, setPrenom] = useState("");
       const [name, setName] = useState("");
       const [fullname, setFullName] = useState("");
       const [email, setEmail] = useState("");

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
                                   //console.log(data);
                                   if (data.user) {
                                          dispatch(
                                                 getSessionSuccess(data.user),
                                          );
                                          setIsConnect(true);
                                          setId(data.user.id);
                                          setPrenom(data.user.prenom);
                                          setName(data.user.nom);
                                          setFullName(
                                                 data.user.prenom +
                                                        " " +
                                                        data.user.nom,
                                          );
                                          setEmail(data.user.email);
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

       return { isConnect, name, prenom, fullname, email, id };
};

export default useIsConnect;
