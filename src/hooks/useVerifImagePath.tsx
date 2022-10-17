/**
 * 
 * S'assure que l'image existe en jpg ou en png.
 * 
 */

import { useEffect, useState } from "react"


export const useVerifImagePath = (path : string) => {
    const [source, setSource ] = useState<string>("");

    useEffect(() => {
        if (path) {
            let url_and_ext = path + ".png";

            const img = new Image();
            img.src = url_and_ext;
            img.onload = () => setSource(url_and_ext);
            img.onerror = () => setSource(path + ".jpg");
     }
    }, [path])
    return { source }
}