/**
 * 
 * Dashboard
 * 
 * Display informations about the user connected
 * 
 */
 import { faCheck, faSpinner, faWarning, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import useIsConnect from '../../../hooks/useIsConnect';
import { request } from '../../../services/requestApi';
import DeconnectionButton from "../../components/boutons/deconnectionButton/deconnectionButton";
import SectionProjet from "./components/SectionProjet";
import SectionUser from "./components/SectionUser";


const Dashboard = () => {
    const {name, prenom, email, id} = useIsConnect();
    const [valueName, setValueName] = useState<string>(name);
    const [valuePrenom, setValuePrenom] = useState<string>(prenom);
    const [valueEmail, setValueEmail] = useState<string>(email);
    const [valuePass, setValuePass] = useState<string>('');

    const [valueNameLast, setValueNameLast] = useState<string>(name);
    const [valuePrenomLast, setValuePrenomLast] = useState<string>(prenom);
    const [valueEmailLast, setValueEmailLast] = useState<string>(email);
    const [valuePassLast, setValuePassLast] = useState<string>('');

    const [loader, setLoader] = useState<string[]>([]);
    const [errorsInps, setErrorInps] = useState<string[]>([]);
    const [messageError, setMessageError] = useState<string>('');

    useEffect(() => {
        setValueName(name)
        setValuePrenom(prenom)
        setValueEmail(email)
        setValueNameLast(name)
        setValuePrenomLast(prenom)
        setValueEmailLast(email)
    }, [name, prenom, email])

    function handleChange(e : React.ChangeEvent<HTMLInputElement>){
        setErrorInps([]);
        setLoader([])
        switch(e.currentTarget.name){
            case "name" :
                setValueName(e.currentTarget.value)
                break;
            case "prenom" :
                setValuePrenom(e.currentTarget.value)
                break;
            case "email" :
                setValueEmail(e.currentTarget.value)
                break;
            case "password" :
                setValuePass(e.currentTarget.value)
                break;
        }
    }


    async function handleInput(name : string){
        setMessageError('')
        setErrorInps([])
        let valueChange = {};
        let loadernew = [...loader];
        loadernew.push(name);
        setLoader(loadernew);
        switch(name){
            case "name" :
                valueChange = {nom: valueName}
                break;
            case "prenom" :
                valueChange = {prenom: valuePrenom}
                break;
            case "email" :
                valueChange = {email: valueEmail}
                break;
            case "password" :
                let pr = prompt("Veuillez confirmer le nouveau mot de passe");
                valueChange = {password: valuePass, confirm_mdp : pr}
                break;
        }
        let res = await request("users/"+id, "PUT", valueChange);
        if(!res.data.errors){
            switch(name){
                case "name" :
                    setValueNameLast(valueName)
                    break;
                case "prenom" :
                    setValuePrenomLast(valuePrenom)
                    break;
                case "email" :
                    setValueEmailLast(valueEmail)
                    break;
            }
            setLoader([]);
        } else {
            let err = [...errorsInps];
            err.push(name);
            setErrorInps(err)
            setMessageError(res.data.errors[0].title)
        }
    }

    return (
        <>
        <Helmet>  
               <title>Dashboard</title>
        </Helmet>
        <div className="dashboard-page otherpage">
            <h2 className="accent">Dashboard.</h2>
            <p>
                    Ici vous trouverez les
                    informations relatives à votre
                    compte personnel.
            </p>

            <div className="container-infos">
                <div className="info">
                    <div className="label">Nom</div>
                    <div className="contain-label">
                        <input type="text" name='name' value={valueName} onChange={e => handleChange(e)} />
                        <ValidButton valueBase={valueName} valueLast={valueNameLast} namevalue="name" functionClick={handleInput} loading={loader.includes("name")} error={errorsInps.includes("name")} />
                    </div>
                </div>
                <div className="info">
                    <div className="label">Prénom</div>
                    <div className="contain-label">
                        <input type="text" name='prenom' value={valuePrenom} onChange={e => handleChange(e)} />
                        <ValidButton valueBase={valuePrenom} valueLast={valuePrenomLast} namevalue="prenom" functionClick={handleInput} loading={loader.includes("prenom")} error={errorsInps.includes("prenom")} />
                    </div>
                </div>
                <div className="info">
                    <div className="label">Email</div>
                    <div className="contain-label">
                        <input type="email" name='email' value={valueEmail} onChange={e => handleChange(e)} />
                        <ValidButton valueBase={valueEmail} valueLast={valueEmailLast} namevalue="email" functionClick={handleInput} loading={loader.includes("email")} error={errorsInps.includes("email")} />
                    </div>
                </div>
                <div className="info">
                    <div className="label">Mot de passe</div>
                    <div className="contain-label">
                        <input type="password" name='password' value={valuePass} onChange={e => handleChange(e)} />
                        <ValidButton valueBase={valuePass} valueLast={valuePassLast} namevalue="password" functionClick={handleInput} loading={loader.includes("password")} error={errorsInps.includes("password")} />
                    </div>
                </div>
            </div>
            <p className="message-error">
                {messageError !== "" && (<FontAwesomeIcon icon={faWarning} />)}
                <span>{messageError}</span>
            </p>

            <SectionProjet />

            <SectionUser />

            
          
            <DeconnectionButton />
        </div>
        </>
    )
}

export default Dashboard;


interface ButtonProps {
    valueBase : string;
    valueLast: string;
    namevalue: string;
    functionClick : (params : string) => Promise<void>
    loading: boolean;
    error: boolean;
}
export const ValidButton = ({valueBase, valueLast, namevalue, functionClick, loading, error} : ButtonProps) => {
    return (
        <AnimatePresence initial={false}>
            {valueBase !== valueLast && (
                <motion.div
                className={"btn-validation" + " " + (error ? "error" : "")} 
                onClick={e => functionClick(namevalue)}
                initial={{ y : 10, opacity: 0}}
                animate={{ y : 0, opacity: 1}}
                exit={{ x : 50, opacity: 0}}>
                    {error ? (
                        <FontAwesomeIcon icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon icon={loading ?  faSpinner : faCheck} />
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}