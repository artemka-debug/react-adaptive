import React from 'react';
import {images} from "../JSONdata";
import SliderImage from "./SliderImage";
import sliderImageStore from '../reducers/sliderImageReducer'

class ImageSlider extends React.Component {
    initTransform = (images) => {
        let newImg = images;

        for (let i = 0; i < newImg.length; i++) {
            newImg[i].transform = `${i * 100}%`;
        }

        return newImg;
    };

    state = {
        index: 0,
        imagesIn: this.initTransform(images)
    };

    slideRight = (e) => {
        e.preventDefault();
        const {index, imagesIn} = this.state;

        if (index < imagesIn.length - 1) {
            this.imagesArray(index + 1);
            this.setIndex(index + 1);
            sliderImageStore.dispatch({type: 'slideRight'});
        }
    };

    slideLeft = (e) => {
        e.preventDefault();
        const {index} = this.state;

        if (index >= 1) {
            this.imagesArray(index - 1);
            this.setIndex(index - 1);
            sliderImageStore.dispatch({type: 'slideLeft'});
        }
    };

    imagesArray = (index) => {
        let newImg = this.state.imagesIn;

        for (let i = 0; i < newImg.length; i++) {
            newImg[i].transform = `${(index - i) * -1 * 100}%`;
        }

        this.setState({imagesIn: newImg})
    };

    moveToImage = (index) => {
        this.setIndex(index);
    };

    setIndex = (newIndex) => {
        this.setState({index: newIndex})
    };

    render() {
        const {state: {imagesIn, index}, moveToImage, slideLeft, slideRight} = this;

        return (
            <div className="image-slider">
                {
                    imagesIn.map((image, index) => (
                        <SliderImage key={index} image={{...image, index}}/>
                    ))
                }
                <div className="image-slider__controls">
                    <button onClick={slideLeft}>
                        <span className="arrow-left"/>
                    </button>
                    <button onClick={slideRight}>
                        <span className="arrow-right"/>
                    </button>
                </div>
                < div className="image-slider__images">
                    {imagesIn.map((image, i) => (
                        <div
                            key={i}
                            className="image-slider__image"
                            style={{opacity: index === i ? 0.5 : 1}}
                            onClick={() => moveToImage(i)}
                        >
                            <img src={image.src} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};


export default ImageSlider;