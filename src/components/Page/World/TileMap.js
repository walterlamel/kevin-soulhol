import React, { createRef, useEffect, useState } from "react";

const TileMap = () => {
       const [height, setHeight] = useState();
       const ref = createRef();

       useEffect(() => {
              if (ref && ref.current) {
                     setHeight(ref.current.clientWidth);
              }
       }, [ref]);

       return (
              <div
                     className="tile"
                     ref={ref}
                     style={{
                            height: height,
                     }}
              ></div>
       );
};

export default TileMap;
