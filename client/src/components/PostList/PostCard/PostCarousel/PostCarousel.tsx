import { useEffect, useState } from "react";
import "./PostCarousel.css";

export default function PostCarousel(props: { postImages: string[] }) {
    const { postImages } = props;
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        if (currentImg >= postImages.length) {
            setCurrentImg(0)
        } else if (currentImg < 0) {
            setCurrentImg(postImages.length - 1);
        }
    }, [currentImg])

    return (
        <div className="post-carousel">
            <img src={postImages[currentImg]} alt={postImages[currentImg]} />
            {
                postImages.length > 1 && <>
                    <a className="carousel-control carousel-prev button" onClick={()=> setCurrentImg(prev => prev-1)} >Prev</a>
                    <a className="carousel-control carousel-next button" onClick={()=> setCurrentImg(prev => prev+1)} >Next</a>
                    <p className="carousel-indicator">{currentImg+1} / {postImages.length}</p>
                </>
            }
        </div>
    );
}
