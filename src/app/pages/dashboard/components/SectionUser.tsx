
import { useState } from "react";
import useGetUsers from "../../../../hooks/useGetUsers";

const headerTable = {
    nom : {
        title : "Nom"
    },
    prenom: {
        title : "Prénom"
    },
    email: {
        title : "Email"
    },
    roles: {
        title: "Rôles"
    }
}

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
    const [refresh, setRefresh] = useState(0)
    const {listUsers} = useGetUsers({params : {}, refresh: refresh});

    return (
        <section>
            <h3>Utilisateurs</h3>
            <table>
                <thead>
                    <tr>
                        {
                          Object.keys(headerTable).map((key, index) => (
                            <td key={key}>{key}</td>
                          ))
                        }
                    </tr>
                </thead>
                <tbody>
                        {listUsers.map((user, key) => (
                            <tr>
                                {
                                    Object.keys(headerTable).map((key, i) => (
                                        <td key={key}>{user[key]}</td>
                                    ))
                                }
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    )
}

export default SectionUser;