/**
 * 
 * Section Projects
 * 
 * Affiche tous les projets que l'utilisateur à le droit de voir
 * 
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faLink } from "@fortawesome/free-solid-svg-icons";
import useGetProjects from "../../../../hooks/useGetProjects";
import { request } from "../../../../services/requestApi";
import ProjectType from "../../../../types/projectType";
import React, { FormEvent, useEffect, useState } from "react";
import useIsAdmin from "../../../../hooks/hooksSession";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayConfirm } from "../../../components/confirm/slice/ConfirmSlice";



const SectionProjet = () => {
    const [reload, setReload] = useState<number>(0);
    const {list} = useGetProjects({params: { filter : {}}, refresh : reload});
    const [openedModal, setOpenedModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ProjectType | null>(null);
    const [selectedKeyToModif, setSelectedKeyToModif] = useState<keyof ProjectType|null>(null);
    const {isAdmin} = useIsAdmin();
    const navigate = useNavigate();


    useEffect(() => {
        window.addEventListener('click', e => {
            if(e && e.target instanceof Element){
                let targ = e.target;
                if(targ.className === "container-modal"){
                    closeModal()
                }
            }
            
        })

        window.addEventListener('keydown', e => {
            switch(e.key){
                case 'Escape':
                    closeModal()
                    break;
            }
        })
    }, [])

    function openModal(item:ProjectType, paramToModif:keyof ProjectType|null){
        if(item){
            setOpenedModal(true);
            setSelectedItem(item);
            setSelectedKeyToModif(paramToModif);
        }
    }

    function closeModal(){
        setOpenedModal(false);
        setSelectedItem(null);
        setSelectedKeyToModif(null);
    }

    function reloading(){
        setReload(prev => prev+1)
    }

    return (
        <>
        {isAdmin && (
            <section>
            <h3>Projects</h3>
            <table>
                <thead>
                    <tr>
                        <td>Nom du projet</td>
                        <td>Type</td>
                        <td>Date</td>
                        {isAdmin && (
                            <>
                            <td className="littleRow">Brouillon</td>
                            <td className="littleRow">Homepage</td>
                            <td>Supprimer</td>
                            </>
                        )}

                    </tr>
                </thead>
                <tbody>
                    {list.map((project:ProjectType) => (
                        <LigneProjet item={project} key={project.id} reloading={reloading} openModal={openModal} />
                    ))}
                </tbody>
            </table>
            <button onClick={e => navigate('/add')}>Ajouter un projet</button>
            <ModalText open={openedModal} closeModal={closeModal} selectedItem={selectedItem} selectedKeyToModif={selectedKeyToModif} reloading={reloading}/>
        </section>
        )}
        </>
        
    )
}

export default SectionProjet;


export const LigneProjet = ({item, reloading, openModal}:{item:ProjectType, reloading:Function, openModal:Function}) => {
    const {isAdmin} = useIsAdmin();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    async function deleteItem(){
        if(!isAdmin){ return }
        if(item == null){ return; }
        dispatch(displayConfirm({ 
            text : "Confirmez-vous de vouloir supprimer '"+item.title+"'",
            btn_accept : "Supprimer", 
            accept: async () => {
                await request("projects/"+item.id, "delete", {});
                reloading()
            }
        }))
    }

    async function updateItem(){
        if(!isAdmin){ return }
        await request("projects/"+item.id, "put", item)
        reloading()
    }


    return (
        <tr>
            <td onClick={ e => navigate("/add", { state : {id : item.id}})}>{item.title}</td>
            <td onClick={ e => navigate("/add", { state : {id : item.id}})}>{item.type}</td>
            <td onClick={ e => navigate("/add", { state : {id : item.id}})}>{item.date}</td>
            {isAdmin && (
                <>
                <td className="littleRow">
                    <input 
                        type="checkbox" 
                        name="is_brouillon" 
                        id="" 
                        checked={item?.is_brouillon} 
                        onChange={e => {
                                item.is_brouillon = !item.is_brouillon;
                                updateItem()
                            }}/>
                </td>
                <td className="littleRow">
                    <input 
                        type="checkbox" 
                        name="in_homepage" 
                        id="" 
                        checked={item?.in_homepage} 
                        onChange={e => {
                            item.in_homepage = !item.in_homepage; 
                            updateItem()
                        }}/>
                    </td>
                <td className="littleRow" onClick={e => deleteItem()}><FontAwesomeIcon icon={faTrash} /></td>
                </>
            )}
            
        </tr>
    )
}


export const ModalText = ({open, closeModal, selectedItem, selectedKeyToModif, reloading}:{open:boolean, closeModal:Function, selectedItem:ProjectType|null, selectedKeyToModif:keyof ProjectType|null, reloading:Function}) => {
    const [value, setValue] = useState<string|number>();
    const inputRef =  React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;


    useEffect(() => {
        if(selectedItem && selectedKeyToModif){
            const newvalue = selectedItem[selectedKeyToModif];
            if(newvalue !== true && newvalue !== false){
                setValue(newvalue);
            }
            inputRef.current.focus()
        }
    }, [selectedItem])

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(selectedKeyToModif !== null && selectedItem !== null && value !== undefined){
                selectedItem[selectedKeyToModif] = value;

                await request("projects/"+selectedItem.id, "PUT", selectedItem);
                reloading()
                closeModal()
            
        }
    }

    return (
        <>
        {open && (
            <div className="container-modal">
            <form action="" onSubmit={(e:FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                <label htmlFor="modal">{selectedKeyToModif}</label>
                <textarea ref={inputRef} name="modal" id="" value={value ?? ""} onChange={e => setValue(e.target.value)} ></textarea>
                <input type="submit" value=">" />
            </form>
        </div>
        )}
        </>
        
        
    )
}