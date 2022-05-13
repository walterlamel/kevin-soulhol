import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
       createRef,
       useContext,
       useEffect,
       useRef,
       useState,
} from "react";

import { faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import Connecter from "../../services/Connecter.class";

import { SessionContext } from "../../context/SessionProvider";

const Login = ({ opener }) => {
       const [open, setOpen] = useState(false);
       const [loader, setLoader] = useState(false);
       const [identifiant, setIdentifiant] = useState("");
       const [text, setText] = useState(
              "Vous ne pouvez vous connecter qu'avec les identifiants que je vous ais envoyé par mail. Si non, tant pis.",
       );
       const [password, setPassword] = useState("");
       const { setPseudo } = useContext(SessionContext);
       const ref = createRef();

       useEffect(() => {
              setOpen(opener);
       }, [opener]);

       useEffect(() => {
              if (ref && ref.current) {
                     ref.current.focus();
              }
       }, [open]);

       function handleSubmit(e) {
              e.preventDefault();
              setLoader(true);
              new Connecter("login")
                     .connect_to_api({
                            identifiant: identifiant,
                            password: password,
                     })
                     .then((res) => {
                            setLoader(false);
                            if (res && res.res) {
                                   setPseudo(res.identifiant);
                                   window.location.reload();
                                   setOpen(false);
                                   setText("");
                            } else {
                                   setText(res.text);
                            }
                     });
       }

       return (
              <>
                     {open && (
                            <form
                                   className="container-login"
                                   onSubmit={(e) => handleSubmit(e)}
                            >
                                   <p>{text}</p>
                                   <div className="container-input">
                                          <label htmlFor="identifiant">
                                                 Identifiant
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
                                   <input
                                          id="submitLogin"
                                          type="submit"
                                          value="Log in"
                                   />
                            </form>
                     )}
              </>
       );
};

export default Login;
