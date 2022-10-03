/**
 * 
 * Popups
 * 
 * Gère toutes les popups.
 * 
 */
 import React from 'react'
import {useDispatch, useSelector } from "react-redux";
import { closePopup, openedPopup, insidePopup } from './slice/popupSlice';



const Popup = () => {
    const dispatch = useDispatch();
    const opened = useSelector(openedPopup);
    const inside = useSelector(insidePopup);


    function handleClick(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
        e.preventDefault();
        const target = e.target as HTMLElement;
        
        if(target.id === "bg-popup"){
            dispatch(closePopup());
        }
        
    }

    return(
        <>
        {opened && (
            <div className="container-popup" id='bg-popup' onClick={e => handleClick(e)}>
            <div className="popup">
                <div className="container-popup-header">
                    <div className="closer"  onClick={() => dispatch(closePopup())}>x</div>
                </div>
                <div className="container-popup-contain">
                    {inside}
                </div>
            </div>
        </div>
        )}
        </>
        
        
    )
}

export default Popup;