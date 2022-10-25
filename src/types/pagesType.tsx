//types

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode, faCodeCommit, faEnvelopeOpenText, faHouse } from "@fortawesome/free-solid-svg-icons";
import FormAddProject from "../app/pages/addProjectpage/FormAddProject";
import AddUserPage from "../app/pages/AddUser/AddUserPage";
import Dashboard from "../app/pages/dashboard/Dashboard";
import Contactpage from "../app/pages/home/components/contactpage";
import Gamepage from "../app/pages/home/components/gamepage/Gamepage";
import Homepage from "../app/pages/home/components/homepage";
import Works from "../app/pages/works/Works";

export interface pageType {
    link: string;
    authRequired: boolean;
    elemReact: JSX.Element;
    inMenu?: boolean;
    text?: string;
    icon?: IconProp;
}



// différentes pages existantes
export const allPages : pageType[] = [
    {
        link: "/",
        authRequired: false,
        elemReact : <Homepage />,
        inMenu: true,
        text: "Accueil",
        icon: faHouse
    },
    {
        link: "/contacts",
        authRequired: false,
        elemReact : <Contactpage />,
        inMenu: true,
        text: "Contacts",
        icon: faEnvelopeOpenText
    },
    {
        link: "/games",
        authRequired: false,
        elemReact : <Gamepage />
    },
    {
        link: "/dashboard",
        authRequired: true,
        elemReact : <Dashboard />
    },
    {
        link: "/add",
        authRequired: true,
        elemReact : <FormAddProject />
    },
    {
        link: "/works",
        authRequired: false,
        elemReact: <Works />,
        inMenu: false,
        text: "Travaux",
        icon: faCode
    },
    {
        link: "/adduser",
        authRequired: true,
        elemReact: <AddUserPage />
    }
];

export type namePage = typeof allPages[number]['link'];