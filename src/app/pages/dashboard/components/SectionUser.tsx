import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsAdmin from "../../../../hooks/hooksSession";
import useGetUsers from "../../../../hooks/useGetUsers";
import { allPages } from "../../../../types/pagesType";

const headerTable = {
  nom: {
    title: "Nom",
  },
  prenom: {
    title: "Prénom",
  },
  email: {
    title: "Email",
  },
  roles: {
    title: "Rôles",
  },
};

interface UserType {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  roles: string;
  created_at: string;
  updated_at: string;
}

export const SectionUser = () => {
  const [refresh, setRefresh] = useState(0);
  const { listUsers } = useGetUsers({ params: {}, refresh: refresh });
  const { isAdmin } = useIsAdmin();
  const navigate = useNavigate();

  return (
    <>
      {isAdmin && (
        <section>
          <h3>Utilisateurs</h3>
          <table>
            <thead>
              <tr>
                {Object.keys(headerTable).map((key, index) => (
                  <td key={index}>{key}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {listUsers.map((user, key) => (
                <tr key={key}>
                  {Object.keys(headerTable).map((key, i) => (
                    <td key={i}>{user[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={(e) => navigate("/" + allPages[6].link)}>
            Ajouter un utilisateur
          </button>
        </section>
      )}
    </>
  );
};

export default SectionUser;
