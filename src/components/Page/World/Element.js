import React from "react";

const Element = ({ position, img }) => {
       return (
              <div className="element" style={position}>
                     <img src={"/images/" + img + ".png"} alt="" />
              </div>
       );
};

export default Element;
