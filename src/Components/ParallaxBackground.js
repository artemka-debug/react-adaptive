import React, {useState} from 'react';
import {Parallax} from "react-scroll-parallax/cjs";

const ParallaxBackground = () => {
    const [top] = useState(0);

    return (
        <Parallax className="parallax" y={[-30, 30]}>
            <div>
                <img
                    className="parallax__image"
                    src="https://p0.piqsels.com/preview/128/352/845/person-using-macbook-air.jpg"
                    alt="macbook"/>
            </div>
        </Parallax>

    )
};

export default ParallaxBackground;