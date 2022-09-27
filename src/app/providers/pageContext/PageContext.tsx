/**
 * 
 * Page Context
 * 
 * Gère l'apparition de la bonne page à côté  de l'illustration
 * 
 */

import { createContext, Dispatch, useContext, useState } from "react";

//types
type namePage = "home" | "contact" | "games";

type Props = { children: JSX.Element }


interface ReturnPageContext {
    seenPage : string,
    changePage: Function
}


export const PageContext = createContext({} as ReturnPageContext);



export const PageProvider = ({children}:Props) => {
    const [seenPage, setSeenPage] = useState<namePage>("home");


    function changePage(newpage:namePage){
        setSeenPage(newpage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <PageContext.Provider value={{seenPage, changePage}} >
            {children}
        </PageContext.Provider>
    )
}