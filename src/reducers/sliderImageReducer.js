import {createStore} from "redux";

const initialState = {currentSliderIndex: 0};

function sliderImageStorage(state = initialState, action) {
    switch (action.type) {
        case 'slideLeft':
            localStorage.setItem('imageSliderIndex', `${+localStorage.getItem('imageSliderIndex') - 1}`);

            return {currentSliderIndex: state.currentSliderIndex - 1};
        case 'slideRight':
            localStorage.setItem('imageSliderIndex', `${+localStorage.getItem('imageSliderIndex') + 1}`);

            return {currentSliderIndex: state.currentSliderIndex + 1};
        default:
            return state;
    }
}

const sliderImageStore = createStore(sliderImageStorage);
export default sliderImageStore;
