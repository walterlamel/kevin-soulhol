import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { request } from "../../../services/requestApi";
import SelectImg from "./components/SelectImg"


type tplotOptions = {
    [key: string]: FormDataEntryValue | FormDataEntryValue[]
}
  
export const FormAddProject = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [project, setProject] = useState<any>(false);
    const [coverImg, setCoverImg] = useState<string>("");
    const [load, setLoad] = useState<boolean>(false);
    const [allImg, setAllImg] = useState<any[]>([]);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const getProj = async () => {
            const proj = await request("projects/"+location.state.id, "GET", {});
            setProject(proj.data[0])
            
            setCoverImg(process.env.REACT_APP_API_USER + "uploads/" + proj.data[0].main_img)
            let n = [...allImg];
            for (let index = 0; index < proj.data[0].images.length; index++) {
                n.push(index);
                setIndex(index)
            }
            setAllImg(n)
            
        }

        if(location.state && location.state.id){
            getProj()
        }
    }, [location.state])

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setErrorMsg("")
        let inps = document.querySelectorAll('label');
        inps.forEach(inp => {
            inp.classList.remove('error')
        });

        const formData:FormData = new FormData(e.target as HTMLFormElement)
        const dataToSend:tplotOptions = {};


        for (var [key, value] of formData) {
            dataToSend[key] = value ?? "false";
        }

        if(!dataToSend.is_brouillon){
            dataToSend.is_brouillon = "false";
        }

        if(!dataToSend.in_homepage){
            dataToSend.in_homepage = "false";
        }


        let result;
        if(project){
            result = await request("projects/"+project.id, "PUT", dataToSend);
        } else {
            result = await request("projects/", "POST", dataToSend);
        }

        if(result.data.errors){
            setErrorMsg(result.data.errors[0].title);
            result.data.errors.forEach(function(codeerror:any){
                let inp = document.querySelector('label[for="'+ codeerror.source.pointer+'"]');
                inp?.classList.add('error')
            });
        } else {
            //console.log(result)
            navigate("/")
        }
    }

    async function handleChangeCoverImg(e : React.ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            var reader = new FileReader();
            reader.onloadstart = function(evt) {
                setLoad(true)
            }
            reader.onloadend = function(evt) {
                setLoad(false)
            };
            reader.readAsArrayBuffer(e.target.files[0])
              
            var tmppath = URL.createObjectURL(e.target.files[0]);
            setCoverImg(tmppath)
        }
    }

    async function handleClickAddImg(){
        if(allImg.length < 10){
            let n = [...allImg];
            n.push(index+1);
            setAllImg(n)
            setIndex(prev => prev+1)

            setTimeout(() => {
                const lastcreated : HTMLInputElement | null = document.querySelector('#image'+(index +1))
                if(lastcreated) { lastcreated.click() }
            }, 100);

        }
    }

    async function handleDeleteImg(i : number){
        let n = [...allImg];
        n = n.filter(p => p !== i)
        setAllImg(n)
    }


    return (
        <div className="pageFormAdd otherpage">
            <h2><span className="accent">Ajouter</span><br/>un projet</h2>
            <form action="" onSubmit={e => handleSubmit(e)}>

                <label htmlFor="title">
                    Title *
                    <input type="text" name="title" id="" defaultValue={project ? project.title : ""}/>
                </label>

                <label htmlFor="date">
                    Date *
                    <input type="text" name="date" id=""  defaultValue={project ? project.date : ""}/>
                </label>

                <label htmlFor="type">
                    Type *
                    <input type="text" name="type" id=""  defaultValue={project ? project.type : ""}/>
                </label>

                <label htmlFor="short_desc">
                    Courte description *
                    <input type="text" name="short_desc" id=""  defaultValue={project ? project.short_desc : ""}/>
                </label>

                <label htmlFor="desc">
                    Description *
                    <textarea name="desc" id="" defaultValue={project ? project.desc : ""}></textarea>
                </label>

                <label htmlFor="link">
                    Lien vers le site
                    <input type="text" name="link" id=""  defaultValue={project ? project.link : ""} />
                </label>

                <label htmlFor="in_homepage" className="checbox-label">
                    Sur la page d'accueil 
                    <input type="checkbox" name="in_homepage" id=""  defaultChecked={project.in_homepage} />
                </label>

                <label htmlFor="is_brouillon" className="checbox-label">
                    Brouillon
                    <input type="checkbox" name="is_brouillon" id="" defaultChecked={project.is_brouillon} />
                </label>

                <label htmlFor="is_brouillon" className="checbox-label">
                    Image principale
                    
                </label>


                <div className="containermainimage" onClick={() => { const inp : HTMLInputElement | null = document.querySelector('#coverimage'); if(inp){ inp.click() } }} >
                        { load && (
                            <div className="loader"></div>
                        )}
                        <img src={coverImg} alt="" />
                        <input type="file" name="coverimage" id="coverimage" onChange={e => handleChangeCoverImg(e)} />
                </div>

                <div className="container-images">
                    {
                        allImg.map((n, k) => (
                            <SelectImg key={n} index={n} img={(project?.images && project?.images[n]) ? project.images[n] : ""} deleting={() => handleDeleteImg(n)} />
                        ))
                    }
                    <div className="add-img" onClick={e => handleClickAddImg()}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                
                
                

                <input type="submit" value={project ? "Modifier" : "Ajouter"} />

                <p className="error-message">{errorMsg}</p>
            </form>
        </div>
    )
}


export default FormAddProject;
