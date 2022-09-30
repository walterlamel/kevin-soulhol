import { ObjectType } from "typescript";
import { request } from "../../../services/requestApi";


type tplotOptions = {
    [key: string]: FormDataEntryValue
}
  
export const FormAddProject = () => {

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData:FormData = new FormData(e.target as HTMLFormElement)
        const dataToSend:tplotOptions = {};



        for (var [key, value] of formData) {
            dataToSend[key] = value;
        }

        let result = await request("projects/", "POST", dataToSend);
        console.log(result)
        if(result.data.errors){
            result.data.errors.forEach(function(codeerror:any){
                let inp = document.querySelector('input[name="'+ codeerror.source.pointer+'"]');
                inp?.classList.add('error')
            });
        }
    }


    return (
        <div className="pageFormAdd otherpage">
            <h2><span className="accent">Ajouter</span><br/>un projet</h2>
            <form action="" onSubmit={e => handleSubmit(e)}>

                <label htmlFor="title">
                    Title
                    <input type="text" name="title" id="" />
                </label>

                <label htmlFor="date">
                    Date
                    <input type="text" name="date" id="" />
                </label>

                <label htmlFor="type">
                    Type
                    <input type="text" name="type" id="" />
                </label>

                <label htmlFor="short_desc">
                    Courte description
                    <input type="text" name="short_desc" id="" />
                </label>

                <label htmlFor="desc">
                    Description
                    <textarea name="desc" id=""></textarea>
                </label>

                <label htmlFor="link">
                    Lien vers le site
                    <input type="text" name="link" id="" />
                </label>

                <label htmlFor="repertory">
                    Répertoire d'images
                    <input type="text" name="repertory" id="" />
                </label>

                <label htmlFor="in_homepage" className="checbox-label">
                    Sur la page d'accueil
                    <input type="checkbox" name="in_homepage" id="" />
                </label>

                <label htmlFor="is_brouillon" className="checbox-label">
                    Brouillon
                    <input type="checkbox" name="is_brouillon" id="" checked />
                </label>

                <input type="submit" value="Ajouter" />

            </form>
        </div>
    )
}


export default FormAddProject;


/*
              is_brouillon: false,
              in_homepage: true,
              */