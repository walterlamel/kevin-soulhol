import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getSession,
  getSessionFailed,
  getSessionSuccess,
} from "../app/pages/slices/userSlice";
import { request } from "../services/requestApi";

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
    let res = await request("isConnect", "GET", {});

    if (res.data && res.data.user) {
      let data = res.data;
      dispatch(getSessionSuccess(data.user));
      setIsConnect(true);
      setId(data.user.id);
      setPrenom(data.user.prenom);
      setName(data.user.nom);
      setFullName(data.user.prenom + " " + data.user.nom);
      setEmail(data.user.email);
    } else {
      dispatch(getSessionFailed(res.message));
      setIsConnect(false);
    }
  }

  return { isConnect, name, prenom, fullname, email, id };
};

export default useIsConnect;
