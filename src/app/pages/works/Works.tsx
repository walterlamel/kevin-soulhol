import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import useGetProjects from "../../../hooks/useGetProjects";
import useGetTools, { outilType } from "../../../hooks/useGetTools";
import { useVerifImagePath } from "../../../hooks/useVerifImagePath";
import Popup from "../../components/popup/Popup";
import { createPopup } from "../../components/popup/slice/popupSlice";

const Works =() => {
    const [selectedFilterTool, setSelectedFilterTool] = useState<number|false>(false)
    const [refresh, setRefresh] = useState<number>(0)
    const { outils } = useGetTools({ filter : { with_project : true }});
    const {list} = useGetProjects({ params : { filter : {
        is_brouillon: false,
        orderBy: "date",
        asc: "desc",
        outils: selectedFilterTool
    } }, refresh : refresh});
    const dispatch = useDispatch();


    function handleClickFilterTool(id : number|false){
        setSelectedFilterTool(id)
        setRefresh(prev => prev+1)
    }

    return (
        <>
        <Helmet>
            <title>Travaux</title>
        </Helmet>
        <div className="work-page otherpage">
            <h2 className="accent">Travaux.</h2>
            <p>Entre programation, illustration et graphisme, il y a un peu de tout. Ce sont des projets sur lesquels j'ai travaillé, soit durant ma scolarité, soit pour des clients, soit même pour mon propre plaisir.</p>
            <div className="container-filter-tools">
                    <div className={"filter-outil" + (!selectedFilterTool ? " select" : "")} onClick={() => handleClickFilterTool(false)}>
                        <FontAwesomeIcon icon={faCancel} />
                    </div>
                {outils.map((o : outilType, k : number) => (
                    <div className={"filter-outil" + (selectedFilterTool === o.id ? " select" : "")} key={k} onClick={() => handleClickFilterTool(o.id)}>
                        <img src={process.env.REACT_APP_API_USER + "/uploads/" + (o?.icon ?? "")} alt={o.name} />
                    </div>
                ))}
            </div>
            <div className="contain-list-work">
                {list?.map((work,key) => (
                    <div className="work-elem" key={key} onClick={ e => {
                            dispatch(createPopup(work));
                        }}>
                        <div className="bg">
                            <ImgBack path={process.env.REACT_APP_API_USER + work.main_img} />
                        </div>
                        <div className="texts">
                            <div className="title">{work.title}</div>
                            <div className="date">{work.date} - {work.type}</div>
                            <div className="desc">{work.short_desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Popup />
        </>
    )
}

export default Works;


const ImgBack = ({path} : { path : string | undefined}) => {

    return <img src={path} alt="" />
}