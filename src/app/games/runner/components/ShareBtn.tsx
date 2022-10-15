import React from "react";
import ShareOnSocial from "react-share-on-social";
import favicon from "../assets/logo.png";

const ShareBtn = () => {

    return (
        <ShareOnSocial data={{
            textToShare : "Text",
            link : "https://kevin-soulhol.fr",
            linkTitle : "Keke",
            linkMetaDesc : "Meta desc",
            linkFavicon : {favicon}
        }}
        onClick={() => console.log("SHARE !")}><div className="share-btn" id="share-btn">Share</div></ShareOnSocial>
        
    )
}


export default ShareBtn;