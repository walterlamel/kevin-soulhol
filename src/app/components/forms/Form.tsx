import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../../../services/requestApi";

export interface InputType {
    name: string;
    label: string;
    type: "text" | "email" | "password" | "textarea" | "radio" | "checkbox";
    id?: string;
}

const Form = ({ link_request, link_redirect, inputs, typeDataToSend, method, textSubmit } : { link_request : string, link_redirect?: string, inputs: InputType[], typeDataToSend: any, method : "post" | "get" | "put", textSubmit? : string}) => {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState<string>('');


    async function handleSubmit(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setErrMessage('');

        const formData:FormData = new FormData(e.target as HTMLFormElement)
        let dataToSend:typeof typeDataToSend = {};

        for (var [key, value] of formData) {
            dataToSend[key] = value;
        }

        let result = await request(link_request, method, dataToSend);
        console.log(result)
        if(result.data.errors){
            setErrMessage(result.data.errors[0].title);
            result.data.errors.forEach(function(codeerror:any){
                let inp = document.querySelector('input[name="'+ codeerror.source.pointer+'"]');
                inp?.classList.add('error')
            });
        } else {
            if(link_redirect){
                navigate("/"+link_redirect)
            }
        }
    }

    return (
        <form action="" onSubmit={e => handleSubmit(e)}>
            { inputs.map((inp, k) => {
                if(inp.type === "text" || inp.type === "email" || inp.type === "password"){
                    return (
                        <label htmlFor={inp.name} key={k}>
                            {inp.label}
                            <input type={inp.type} name={inp.name} />
                        </label>
                    )
                }         
            })}

            <div className="message-error">{errMessage}</div>
            <input type="submit" value={textSubmit ?? "Envoyer"} />
        </form>
    )
}

export default Form;