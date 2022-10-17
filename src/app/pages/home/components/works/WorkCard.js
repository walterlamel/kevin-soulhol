import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Slider from "../../../../components/slider/Slider";

import { useDispatch } from "react-redux";
import { createPopup } from "../../../../components/popup/slice/popupSlice";
import { useVerifImagePath } from "../../../../../hooks/useVerifImagePath";

const variants = {
       open: {
              x: 0,
              opacity: 0.5,
              transition: {
                     y: { stiffness: 1000, velocity: -100 },
              },
       },
       closed: {
              x: 250,
              opacity: 0,
              transition: {
                     y: { stiffness: 1000 },
              },
       },
       exit: {
              x: -250,
              opacity: 0,
              transition: {
                     y: { stiffness: 1000 },
              },
       },
       actif: {
              opacity: 1,
              y: -10,
              x: 0,
       },
};

const WorkCard = ({ projet, actif, getTo, Key }) => {
       const { source } = useVerifImagePath(
              "/imgs/" + projet.repertory + "/main",
       );
       const dispatch = useDispatch();

       return (
              <motion.div
                     className="work-card"
                     variants={variants}
                     initial={"closed"}
                     animate={actif ? "actif" : "open"}
                     exit={"exit"}
                     whileHover={"actif"}
                     whileTap={{ scale: 0.95 }}
                     onClick={(e) => {
                            if (actif) {
                                   dispatch(
                                          createPopup(
                                                 <InsidePopup
                                                        id={projet.id}
                                                        date={projet.date}
                                                        titre={projet.title}
                                                        desc={projet.desc}
                                                        link={projet.link}
                                                        repertory={
                                                               projet.repertory
                                                        }
                                                 />,
                                          ),
                                   );
                            } else {
                                   getTo(Key + 1);
                            }
                     }}
              >
                     <div className="container-text">
                            <h4>{projet.title}</h4>
                            <div className="container-infos-sup">
                                   <span className="date">{projet.date}</span>
                                   <span className="category">
                                          {projet.type}
                                   </span>
                            </div>
                            <div className="container-desc">
                                   {projet.short_desc}
                            </div>
                     </div>
                     <div className="container-img">
                            <img src={source} />
                     </div>
              </motion.div>
       );
};

export const InsidePopup = ({ id, date, titre, desc, link, repertory }) => {
       const [imgs, setImgs] = useState([]);

       useEffect(() => {
              getImages().then((imgs) => {
                     setImgs(imgs);
              });
       }, [id, repertory]);

       async function getImages() {
              var formData = new FormData();
              formData.append("repertory", repertory);

              const requestOptions = {
                     method: "POST",
                     body: formData,
              };

              return await fetch(
                     process.env.REACT_APP_URL_GET_PROJECTS_IMAGES,
                     requestOptions,
              )
                     .then((res) => res.json())
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
              <div className="inside-popup-experience">
                     <div className="container-text">
                            <span className="date">{date}</span>
                            <span className="titre">{titre}</span>
                            <div className="container-desc">{desc}</div>
                            {link && (
                                   <a className="link-to-site" href={link}>
                                          Visiter le site
                                   </a>
                            )}
                     </div>
                     <Slider childs={imgs} />
              </div>
       );
};

export default WorkCard;
