/**
 * 
 * Contact page
 * 
 * Display contacts
 * 
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
       faEnvelopeOpenText,
       faPhone,
} from "@fortawesome/free-solid-svg-icons";




const Contactpage = () => {
    return (
        <div className="contactpage otherpage">
            <h2 className="accent">Contacts.</h2>
            <p>Si vous voulez me contacter, voici quelques moyens de le faire. Vous pouvez aussi essayer de tracer des symboles sur le sol, allumer des bougies et les disposer en cercle tout autours puis vous placer au centre en psalmodiant des mots alambiqués.</p>
            
            <ul>
                <li>
                    <a href={"mailto:"+process.env.REACT_APP_AUTHOR_EMAIL}>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} /><span>{process.env.REACT_APP_AUTHOR_EMAIL}</span>
                    </a>
                </li>
                <li>
                    <a href={"tel:"+process.env.REACT_APP_AUTHOR_TELEPHONE}>
                        <FontAwesomeIcon icon={faPhone} /><span>{process.env.REACT_APP_AUTHOR_TELEPHONE}</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default Contactpage;