import React from 'react';
import sliderImageStore from "../reducers/sliderImageReducer";

class SliderImage extends React.Component {
    constructor(props) {
        super(props);
        const {transform, src, index} = props.image;

        this.state = {
            transform,
            src,
            index
        }
    }

    changeTransform() {
        const {index, currentSliderIndex} = this.state;

        return `${(index - currentSliderIndex) * 100}%`;
    };

    componentDidMount() {
        this.unsub = sliderImageStore.subscribe(() => {
            let state = sliderImageStore.getState();

            this.setState({currentSliderIndex: state.currentSliderIndex, transform: this.changeTransform()})
        });
    }

    componentWillUnmount() {
        this.unsub()
    }

    render() {
        const {transform, src, index, currentSliderIndex} = this.state;

        return (
            <img src={src} alt="img" style={{
                transform: `translate(${transform})`,
                width: '100%',
                height: '1000px'
            }}/>
        )
    }
};

export default SliderImage;