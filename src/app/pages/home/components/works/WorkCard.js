import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Slider from "../../../../components/slider/Slider";

import { useDispatch } from "react-redux";
import { createPopup } from "../../../../components/popup/slice/popupSlice";
import Connecter from "../../../../../services/Connecter.class";

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
       const [src, setSrc] = useState("");
       const dispatch = useDispatch();

       useEffect(() => {
              checkImg();
       }, []);

       function checkImg() {
              var tester = new Image();
              let url = "/images/" + projet.id + "/main.png";
              tester.src = url;

              tester.onload = function () {
                     setSrc(url);
              };
              tester.onerror = function () {
                     setSrc("/images/" + projet.id + "/main.jpg");
              };
       }

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
                            <img src={src} />
                     </div>
              </motion.div>
       );
};

const InsidePopup = ({ id, date, titre, desc, link }) => {
       const [imgs, setImgs] = useState([]);

       useEffect(() => {
              getImages(id).then((imgs) => {
                     setImgs(imgs);
              });
       }, [id]);

       async function getImages(id) {
              /*
              function importAll(r) {
                     return r.keys().map(r);
              }

              const path = "./" + id;
              console.log(path);

              const images = importAll(
                     require.context(path, false, /\.(png|jpe?g|svg|gif)$/),
              );

              return images;
              */

              return new Promise((r, f) => {
                     new Connecter("get_dossier_image")
                            .connect_to_api({ path: id })
                            .then((res) => {
                                   if (res && res.res) {
                                          r(res.text);
                                   } else {
                                          f();
                                   }
                            });
              });
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
