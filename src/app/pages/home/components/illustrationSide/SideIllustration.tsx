/**
 *
 * SideIllustration
 *
 * Show the big illustration with the landscape and all element reacting with
 */

import React, {
       useState,
       useCallback,
} from "react";


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
       const {rect, ref} = useClientRect();


       return (
              <div className="container-side-illustration" /*style={{width: rect}}*/ >
                     { /*<MainIllustration changeWidth={setWidth} /> */ }
                     <img
                     src="/imgs/world.png"
                     alt="main-illustration"
                     ref={ref} />
                     
              </div>
       );
};

export default SideIllustration;
