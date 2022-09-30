/**
 *
 * Home
 *
 * This component is for the homepage. This is only element on the main page at "/"
 */

import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Menu from "../../components/menu/Menu";
import Dashboard from "../dashboard/Dashboard";
import Contactpage from "./components/contactpage";
import Gamepage from "./components/gamepage/Gamepage";
import Homepage from "./components/homepage";
import SideIllustration from "./components/illustrationSide/SideIllustration";
import { namePage, allPages } from "../../../types/pagesType";



const Home = ({openedPage}:{ openedPage: namePage}) => {



    return (
       <>
       <Helmet>
              <title>Home</title>
              <meta name="description" content="Mi-developpeur, mi-graphiste, et re-mi-developpeur derrière, je suis capable de produire un site internet d'un bout à l'autre. Réfléchir à son graphisme, à son UX, à son ambiance, mais aussi écrire son code, son back, et gérer sa mise en ligne. " />
       </Helmet>
       <div className="page home">
              <SideIllustration />
              <div className="container-main-page">
                     <Inside openedPage={openedPage} />
              </div>
       </div>
       </>
        
        
        
 
    );
};

export default Home;


const Inside = ({openedPage}:{openedPage:namePage}) => {

       const variants = {
              initial : {
                     opacity : 0,
                    // x : -500
              },
              animate : {
                     opacity : 1,
                     //x : 0
              },
              exit : {
                     opacity : 0,
                    // x : 500
              }
       }


       function renderSwitch(seenPage:string){
              let elemTorender = null;
              allPages.map(page => {
                     if(page.link === seenPage){
                            elemTorender = page.elemReact;
                     }
              })
              return (<motion.div key={seenPage} className="motion" variants={variants} initial="initial" animate="animate" exit="exit">{elemTorender}</motion.div>);
       }

       return (
              <AnimatePresence>
                     <Menu />
                     {renderSwitch(openedPage)}
              </AnimatePresence>
       )
}


