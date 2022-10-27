import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptBtnTextConfirm, cancelBtnTextConfirm, chooseConfirm, closeConfirm, functionConfirm, openedConfirm, textConfirm, titleConfirm } from "./slice/ConfirmSlice";

const Confirm = () => {
    const opened = useSelector(openedConfirm)
    const title = useSelector(titleConfirm)
    const text = useSelector(textConfirm)
    const btnAcceptText = useSelector(acceptBtnTextConfirm)
    const btnCancelText = useSelector(cancelBtnTextConfirm)
    const fnctConfirm = useSelector(functionConfirm)
    const dispatch = useDispatch();

    function handleAccept(){
        dispatch(chooseConfirm())
        if(fnctConfirm){
            fnctConfirm()
        }
    }

    function handleCancel(){
        dispatch(chooseConfirm(false))
    }

    function handleClose(){
        dispatch(closeConfirm());
    }

    return (
        <>
        { opened && (
            <div className="screen-confirm">
            <div className="contain-confirm">
                <div className="contain-close" onClick={handleClose}><FontAwesomeIcon icon={faClose} /></div>
                <div className="text">
                    {title !== "" && <h3>{title}</h3>}
                    {text !== "" && <p>{text}</p>}
                </div>
                <div className="contain-btns">
                    <button className="btn accept-btn" onClick={handleAccept}>{btnAcceptText}</button>
                    <button className="btn cancel-btn" onClick={handleCancel}>{btnCancelText}</button>
                </div>
            </div>
        </div>
        )}
        </>
        
        
    )
}

export default Confirm;





export const useConfirmResponse = (click : any) => {
    const [response, setResponse]= useState<boolean|null>(null);
    const [wait, setWait] = useState<boolean>(false);

    useEffect(() => {
        setWait(true)
        setResponse(true)
    }, [click])

    useEffect(() => {
        if(response !== null){
            setWait(false);
        }
    }, [response])

    return { response, wait }

}