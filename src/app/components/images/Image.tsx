import { Suspense } from "react"
import { useImage } from "react-image";

const Image = (link : string) => {
    const {src} = useImage({
        srcList: link
    })


    return (
        <Suspense>
            <img src={src} />
        </Suspense>
    )
}

export default Image;


