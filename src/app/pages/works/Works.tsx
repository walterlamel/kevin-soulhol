import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import useGetProjects from "../../../hooks/useGetProjects";
import { useVerifImagePath } from "../../../hooks/useVerifImagePath";
import Popup from "../../components/popup/Popup";
import { createPopup } from "../../components/popup/slice/popupSlice";
import { InsidePopup } from "../home/components/works/WorkCard";

const Works =() => {

    const {list} = useGetProjects({ params : { filter : {
        is_brouillon: false,
        orderBy: "date",
        asc: "desc"
    } }});
    const dispatch = useDispatch();

    return (
        <>
        <Helmet>
            <title>Travaux</title>
        </Helmet>
        <div className="work-page otherpage">
            <h2 className="accent">Travaux.</h2>
            <p>Entre programation, illustration et graphisme, il y a un peu de tout. Ce sont des projets sur lesquels j'ai travaillé, soit durant ma scolarité, soit pour des clients, soit même pour mon propre plaisir.</p>
            <div className="contain-list-work">
                {list.map((work,key) => (
                    <div className="work-elem" key={key} onClick={ e => {
                            dispatch(createPopup(<InsidePopup id={work.id}
                                date={work.date}
                                titre={work.title}
                                desc={work.desc}
                                link={work.link}
                                repertory={
                                    work.repertory
                                }
                            />));
                        }}>
                        <div className="bg">
                            <ImgBack path={"/imgs/" + work.repertory + "/main"} />
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


const ImgBack = ({path} : { path : string}) => {
    const {source} = useVerifImagePath(path);

    return <img src={source} alt="" />
}