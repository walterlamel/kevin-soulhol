import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { request } from "../../../../services/requestApi";
import { displayConfirm } from "../../../components/confirm/slice/ConfirmSlice";

const SelectImg = ({ index, img, deleting } : { index : number, img : any, deleting : Function }) => {
    const [path, setPath] = useState<string>(process.env.REACT_APP_API_USER + img.path ?? "");
    const [load, setLoad] = useState<boolean>(false);
    const [inp, setInp] = useState<HTMLInputElement | null>(null)
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    function handleClick(e : React.MouseEvent<HTMLDivElement, MouseEvent>){
        inp?.click()
    }

    function handleChangeInp(e : React.ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            var reader = new FileReader();
            reader.onloadstart = function(evt) {
                setLoad(true)
            }
            reader.onloadend = function(evt) {
                setLoad(false)
                deleteImg()
            };
            reader.readAsArrayBuffer(e.target.files[0])
              
            var tmppath = URL.createObjectURL(e.target.files[0]);
            setPath(tmppath)
        }

    }

    async function handleDelete(){
        dispatch(displayConfirm({
            text: "Supprimer cette image ?",
            btn_accept: "Supprimer",
            accept : () => {
                deleteImg()
                if(deleting){
                    deleting()
                }
            }
        }))
        

        
    }

    async function deleteImg(){
        if(img.id)
            await request("images/"+img.id, "DELETE", {})
            
            
    }


    useEffect(() => {
        if(ref?.current){
            setInp(ref.current)
        }
    }, [ref, ref.current])

    return (
        <div className="container-image">
            { load && (
                <div className="loader"></div>
            )}
            <img src={path} alt="" onClick={e =>  handleClick(e)} />
            <input type="file" name={"image"+ index} id={"image"+ index} ref={ref} onChange={e => handleChangeInp(e)} />
            <div className="deleteItem" onClick={e => handleDelete()}><FontAwesomeIcon icon={faClose} /></div>
        </div>
    )
}

export default SelectImg;