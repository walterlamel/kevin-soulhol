//types

import FormAddProject from "../app/pages/addProjectpage/FormAddProject";
import Dashboard from "../app/pages/dashboard/Dashboard";
import Contactpage from "../app/pages/home/components/contactpage";
import Gamepage from "../app/pages/home/components/gamepage/Gamepage";
import Homepage from "../app/pages/home/components/homepage";



// différentes pages existantes
export const allPages = [
    {
        link: "home",
        authRequired: false,
        elemReact : <Homepage />
    },
    {
        link: "contacts",
        authRequired: false,
        elemReact : <Contactpage />
    },
    {
        link: "games",
        authRequired: false,
        elemReact : <Gamepage />
    },
    {
        link: "dashboard",
        authRequired: true,
        elemReact : <Dashboard />
    },
    {
        link: "add",
        authRequired: true,
        elemReact : <FormAddProject />
    },
] as const;

export type namePage = typeof allPages[number]['link'];