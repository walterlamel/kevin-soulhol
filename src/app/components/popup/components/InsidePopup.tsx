import { useEffect, useState } from "react";
import Slider from "../../slider/Slider";

interface elementType {
    id?: number;
    date?: string;
    title?: string;
    desc?: string;
    link?: string;
    repertory?: string;
    images?: any[];

    titre?: string;
    lieu?: string;
    type?: string;
}

export const InsidePopup = ({ element } : {element : elementType}) => {
    const [imgs, setImgs] = useState([]);


    useEffect(() => {
           getImages().then((imgs) => {
                  setImgs(imgs);
           });
    }, [element.id, element.repertory]);

    async function getImages() {
           var formData = new FormData();
           if(element.repertory){
            formData.append("repertory", element.repertory);
        }

           const requestOptions = {
                  method: "POST",
                  body: formData,
           };

           return await fetch(
                  process.env.REACT_APP_URL_GET_PROJECTS_IMAGES ?? "",
                  requestOptions,
           )
                  .then((res) => {
                     return res.json()
                  })
                  .then(
                         (res) => {
                                return res;
                         },
                         (err) => {
                                console.log(err);
                                return [];
                         },
                  );
    }


    return (
        <>
        {element.id ? (
            <div className="inside-popup-experience">
                <div className="container-text">
                    <span className="date">{element.date}</span>
                    <span className="titre">{element.title}</span>
                    <div className="container-desc">{element.desc}</div>
                    {element.link && (
                            <a
                                    href={ element.link }
                                    target="_blank"
                                    className="link-to-site"
                                    onClick={e => window.location.href = element.link ?? ""}
                            >
                                    Visiter le site
                            </a>
                    )}
                </div>
                <Slider childs={element.images} />
            </div>
        ) : (
            <div className="inside-popup-experience">
                  <div className="container-text">
                         <span className="date">{element.date}</span>
                         <span className="titre">{element.titre}</span>
                         <span className="lieu">{element.lieu}</span>
                         <div className="container-desc">
                                {element.desc}
                         </div>
                  </div>
           </div>
        )}
        </>
           
    );
};