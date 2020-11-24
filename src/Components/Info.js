import React from 'react';
import ImageSlider from "./ImageSlider";

const Info = () => (
    <div className="info">
        <div className="info__main">
            <div className="info__header">
                <h1>
                    ADAPTIVE APP
                </h1>
            </div>
            <div className="info__about">
                <p>
                    Explore My Work
                </p>
            </div>
        </div>

        <ImageSlider/>
    </div>
);

export default Info;