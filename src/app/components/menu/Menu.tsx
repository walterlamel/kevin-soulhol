/**
 * 
 * Menu
 * 
 * Menu à the top of pages. 
 * 
 */
 import React from 'react'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {
        faEnvelopeOpenText,
        faUserAstronaut,
        faHouse,
 } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../login/slice/loginSlice";
import Login from "../login/Login";
import { loadingUser, selectUser } from "../../pages/slices/userSlice";
import LoaderLogin from "../loaders/loaderLogin/loaderLogin";
import useAnalyticsEventTracker from '../../../services/GoogleAnalytics';


 //types
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
            toPage: "contacts",
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
    const gaEventTracker = useAnalyticsEventTracker('MenuClick')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const loading = useSelector(loadingUser);
    const linkHref = link ? {
        href : link
    } : {};
    


    function handleClick(){
        if(toPage){
            navigate("/"+toPage);
            gaEventTracker(toPage);
        }
        if(toDo){
            if(toDo === "login"){
                dispatch(toggleLogin())
                gaEventTracker("login");
            }
            if(toDo === "dashboard"){
                navigate('/dashboard');
                gaEventTracker("dashboard");
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
                {toDo === "dashboard" && loading ? (<LoaderLogin />) : (<FontAwesomeIcon icon={ico} />)} 
               </div>
               <div className="container-text">
                    <span>{text}</span>
                    {toDo === "dashboard" && (<span>{user.email}</span>)}
               </div>
        </a>
 </li>
    );
}