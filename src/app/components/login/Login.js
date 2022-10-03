import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRef, useEffect, useState } from "react";

import { faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { openedLogin, closeLogin } from "./slice/loginSlice";
import {
       getSession,
       getSessionFailed,
       getSessionSuccess,
       loadingUser,
       messageLogin,
} from "../../pages/slices/userSlice";
import LoaderLogin from "../loaders/loaderLogin/loaderLogin";
import { motion } from "framer-motion";

const Login = () => {
       const dispatch = useDispatch();
       const open = useSelector(openedLogin);
       const loading = useSelector(loadingUser);
       const [identifiant, setIdentifiant] = useState("");
       const [text, setText] = useState(
              "Vous ne pouvez vous connecter qu'avec les identifiants que je vous ais envoyé par mail. Si non, tant pis.",
       );
       const [password, setPassword] = useState("");
       const errorMessage = useSelector(messageLogin);
       const ref = createRef();

       useEffect(() => {
              if (ref && ref.current) {
                     ref.current.focus();
              }
       }, [open]);

       async function handleSubmit(e) {
              e.preventDefault();
              dispatch(getSession());

              fetch(process.env.REACT_APP_API_USER + "login", {
                     method: "POST",
                     headers: {
                            "Content-Type": "application/json",
                     },
                     credentials: "include",
                     body: JSON.stringify({
                            email: identifiant,
                            password: password,
                     }),
              })
                     .then((res) => res.json())
                     .then(
                            (data) => {
                                   if (data.code) {
                                          dispatch(
                                                 getSessionFailed(data.message),
                                          );
                                   } else {
                                          dispatch(getSessionSuccess(data));
                                          dispatch(closeLogin());
                                   }
                            },
                            (err) => {
                                   console.log(err);
                                   getSessionFailed(err.message);
                            },
                     );
              return;
       }

       return (
              <>
                     {open && (
                            <form
                                   className="container-login"
                                   onSubmit={(e) => handleSubmit(e)}
                            >
                                   <p>{text}</p>
                                   <p>{errorMessage}</p>
                                   <div className="container-input">
                                          <label htmlFor="identifiant">
                                                 Email
                                          </label>
                                          <input
                                                 type="text"
                                                 name="identifiant"
                                                 id="identifiant"
                                                 value={identifiant}
                                                 onChange={(e) =>
                                                        setIdentifiant(
                                                               e.target.value,
                                                        )
                                                 }
                                                 ref={ref}
                                                 autoComplete="off"
                                          />
                                          <div className="ico">
                                                 <FontAwesomeIcon
                                                        icon={faUser}
                                                 />
                                          </div>
                                   </div>
                                   <div className="container-input">
                                          <label htmlFor="identifiant">
                                                 Password
                                          </label>
                                          <input
                                                 type="password"
                                                 name="password"
                                                 id="password"
                                                 value={password}
                                                 onChange={(e) =>
                                                        setPassword(
                                                               e.target.value,
                                                        )
                                                 }
                                          />
                                          <div className="ico">
                                                 <FontAwesomeIcon
                                                        icon={faEye}
                                                 />
                                          </div>
                                   </div>
                                   {loading ? (
                                          <div id="submitLogin">
                                                 <LoaderLogin />
                                          </div>
                                   ) : (
                                          <motion.input
                                                 id="submitLogin"
                                                 type="submit"
                                                 value="Log in"
                                                 whileTap={{ scale: 0.9 }}
                                          />
                                   )}
                            </form>
                     )}
                     {open && (
                            <div
                                   className="backLoginForm"
                                   onClick={(e) => dispatch(closeLogin())}
                            ></div>
                     )}
              </>
       );
};

export default Login;
