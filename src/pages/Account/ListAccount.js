import React, { useEffect, useState } from "react";
import Connecter from "../../services/Connecter.class";

const ListAccount = ({ reload }) => {
       const [list, setList] = useState([]);
       useEffect(() => {
              new Connecter("get_accounts").connect_to_api().then((res) => {
                     if (res && Array.isArray(res.text)) {
                            setList(res.text);
                     }
              });
       }, [reload]);

       return (
              <div className="liste-compte">
                     <ul>
                            {list.length ? (
                                   list.map((account, key) => (
                                          <Account
                                                 key={key}
                                                 account={account}
                                          />
                                   ))
                            ) : (
                                   <p>Aucun compte</p>
                            )}
                     </ul>
              </div>
       );
};

export default ListAccount;

const Account = ({ account }) => {
       return (
              <div className="compte">
                     <span className="name">{account.pseudo}</span>
                     <span className="email">{account.email}</span>
                     <span className="meta">{account.meta}</span>
              </div>
       );
};
