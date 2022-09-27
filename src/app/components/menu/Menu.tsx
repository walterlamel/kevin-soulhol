/**
 * 
 * Menu
 * 
 * Menu à the top of pages. 
 * 
 */

 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {
        faEnvelopeOpenText,
        faUserAstronaut,
        faHouse,
 } from "@fortawesome/free-solid-svg-icons";
 import { useNavigate } from "react-router-dom";

 //types
 import {IconProp} from '@fortawesome/fontawesome-svg-core';
import { useContext } from "react";
import { PageContext } from "../../providers/pageContext/PageContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../login/slice/loginSlice";
import Login from "../login/Login";
import { selectUser } from "../../pages/slices/userSlice";

 interface Props{
    clickFunction?: Function,
    ico: IconProp,
    text: string,
    link?: string
    toPage?: string
    toDo?: string | false
}



const Menu = () => {
    const user = useSelector(selectUser);

    //Element du menu
    const menuItems:Array<Props> = [
        {
            ico:faHouse,
            text: "Accueil",
            toPage: "home"
        },
        {
            ico: faEnvelopeOpenText,
            text: "Contacts",
            toPage: "contact",
        },
        {
            ico: faUserAstronaut,
            text: user ? user.prenom + " " + user.nom : "Se connecter",
            toDo: user ? "dashboard" : "login"
        }
    ];

    return (
        <div className="menu">
            <ul>
                {menuItems.map((item, key) => (
                    <ItemMenu key={key} {...item} />
                ))}
            </ul>
            <Login />
        </div>
    )
}

export default Menu;



const ItemMenu = ({clickFunction, ico, text, link, toPage, toDo}:Props) => {
    const {changePage} = useContext(PageContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const linkHref = link ? {
        href : link
    } : {};
    


    function handleClick(){
        if(toPage){
            changePage(toPage)
        }
        if(toDo){
            if(toDo === "login"){
                dispatch(toggleLogin())
            }
            if(toDo === "dashboard"){
                navigate('/dashboard');
            }
        }

        if(clickFunction){
            clickFunction()
        }
    }

    return (
        <li
        className={toDo === "dashboard" ? "menu-item container-connect-session" : "menu-item"}
        onClick={handleClick}
 >
        <a {...linkHref}>
               <div className="icon">
                      <FontAwesomeIcon icon={ico} />
               </div>
               <div className="container-text">
                    <span>{text}</span>
                    {toDo === "dashboard" && (<span>{user.email}</span>)}
               </div>
        </a>
 </li>
    );
}