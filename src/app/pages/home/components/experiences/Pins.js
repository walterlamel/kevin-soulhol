import { motion } from "framer-motion";

const variants = {
       actif: {
              boxShadow: "0px 0px 40px #04D9C4",
       },
       normal: {
              boxShadow: "0px 0px 0px #04D9C4",
       },
};

const Pins = ({ actif }) => {
       return (
              <div className="pins">
                     <motion.div
                            className="inside"
                            variants={variants}
                            initial={false}
                            animate={actif ? "actif" : "normal"}
                     ></motion.div>
                     <div className="border"></div>
              </div>
       );
};

export default Pins;
