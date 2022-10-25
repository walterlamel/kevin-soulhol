/**
 *
 * SideIllustration
 *
 * Show the big illustration with the landscape and all element reacting with
 */
import React, {Suspense} from 'react'
import {
       useState,
       useCallback,
} from "react";

import ElementsWorld from "../../../../../data/elementsworld";
import Conversation from "./components/Conversation";
import Element from "./components/Element";


//Met à jour le width de l'image
function useClientRect() {
       const [rect, setRect] = useState<number>(100);

       const ref = useCallback((n:HTMLImageElement) => {
              if(n !== null){
                     setTimeout(() => {
                            setRect(n.width ?? 100)
                     }, 200);
              }
       }, [])

       return {rect, ref};
}



const SideIllustration = () => {
       const {ref} = useClientRect();


       return (
              <div className="container-side-illustration">
                     <Suspense fallback={<div></div>}>
                            {ElementsWorld.map((elem, key) => (
                                   <Element elem={elem} key={key} />
                            ))}
                     </Suspense>
                     <Conversation />
                     <Suspense fallback={<div></div>}>
                            <img
                            src="/imgs/world.png"
                            alt="main-illustration"
                            ref={ref} />

                     </Suspense>
                     
              </div>
       );
};

export default SideIllustration;
