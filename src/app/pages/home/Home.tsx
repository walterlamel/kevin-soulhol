/**
 *
 * Home
 *
 * This component is for the homepage. This is only element on the main page at "/"
 */

import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Menu from "../../components/menu/Menu";
import { PageContext, PageProvider } from "../../providers/pageContext/PageContext";
import Contactpage from "./components/contactpage";
import Gamepage from "./components/gamepage/Gamepage";
import Homepage from "./components/homepage";
import SideIllustration from "./components/illustrationSide/SideIllustration";



const Home = () => {



    return (
       <>
       <Helmet>
              <title>Home</title>
              <meta name="description" content="Mi-developpeur, mi-graphiste, et re-mi-developpeur derrière, je suis capable de produire un site internet d'un bout à l'autre. Réfléchir à son graphisme, à son UX, à son ambiance, mais aussi écrire son code, son back, et gérer sa mise en ligne. " />
       </Helmet>
       <div className="page home">
              <SideIllustration />
              <div className="container-main-page">
                     <PageProvider>
                            <Inside />
                     </PageProvider>
                     
        
              </div>
       </div>
       </>
        
        
        
 
    );
};

export default Home;


const Inside = () => {
       const { seenPage } = useContext(PageContext);

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
              switch(seenPage){
                     case "home":
                            return (<motion.div key="home" className="motion" variants={variants} initial="initial" animate="animate" exit="exit"><Homepage /></motion.div>)
                            break;
                     case "contact":
                            return (<motion.div key="contact" className="motion" variants={variants} initial="initial" animate="animate" exit="exit"><Contactpage /></motion.div>)
                            break;
                     case "games" :
                            return (<motion.div key="contact" className="motion" variants={variants} initial="initial" animate="animate" exit="exit"><Gamepage /></motion.div>)
              }

       }

       return (
              <AnimatePresence>
                     <Menu />
                     {renderSwitch(seenPage)}
              </AnimatePresence>
       )
}


