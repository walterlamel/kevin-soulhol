import React, { useContext, useEffect, useState } from "react";
import Connecter from "../../services/Connecter.class";
import ListAccount from "./ListAccount";

const AddAccount = () => {
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const [pseudo, setPseudo] = useState("");
       const [metaAuth, setMetaAuth] = useState("");
       const [reloadListAccount, setReloadListAccount] = useState(0);
       const [errorMessage, setErrorMessage] = useState("");
       const [role, setRole] = useState(false);

       useEffect(() => {
              new Connecter("get_role").connect_to_api().then((res) => {
                     if (res && res.res) {
                            setRole(true);
                     }
              });
       }, []);

       function handleSubmit(e) {
              e.preventDefault();
              let newmeta = { auth_dir: metaAuth };
              new Connecter("add_compte")
                     .connect_to_api({
                            email: email,
                            password: password,
                            pseudo: pseudo,
                            meta: JSON.stringify(newmeta),
                     })
                     .then((res) => {
                            console.log(res);
                            if (res && !res.res) {
                                   setErrorMessage(res.text);
                            } else {
                                   setReloadListAccount((prev) => prev + 1);
                            }
                     });
       }

       return (
              <>
                     {role && (
                            <section>
                                   <h3>Comptes actuels</h3>
                                   <ListAccount reload={reloadListAccount} />

                                   <form
                                          action=""
                                          onSubmit={(e) => handleSubmit(e)}
                                   >
                                          <div className="container-input">
                                                 <input
                                                        type="email"
                                                        placeholder="email"
                                                        name="email"
                                                        value={email}
                                                        onChange={(e) =>
                                                               setEmail(
                                                                      e.target
                                                                             .value,
                                                               )
                                                        }
                                                 />
                                                 <input
                                                        type="text"
                                                        placeholder="pseudo"
                                                        name="pseudo"
                                                        value={pseudo}
                                                        onChange={(e) =>
                                                               setPseudo(
                                                                      e.target
                                                                             .value,
                                                               )
                                                        }
                                                 />
                                                 <input
                                                        type="text"
                                                        placeholder="pass"
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) =>
                                                               setPassword(
                                                                      e.target
                                                                             .value,
                                                               )
                                                        }
                                                 />
                                                 <input
                                                        type="text"
                                                        placeholder="id_valid"
                                                        name="meta"
                                                        value={metaAuth}
                                                        onChange={(e) =>
                                                               setMetaAuth(
                                                                      e.target
                                                                             .value,
                                                               )
                                                        }
                                                 />
                                          </div>
                                          <div className="container-input display-right">
                                                 <p>{errorMessage}</p>
                                                 <input
                                                        id="btn-add-account"
                                                        type="submit"
                                                        value="Ajouter"
                                                 />
                                          </div>
                                   </form>
                            </section>
                     )}
              </>
       );
};

export default AddAccount;
