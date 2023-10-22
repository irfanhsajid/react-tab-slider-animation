import leftArrow from './icons/arrow-left.svg';
import rightArrow from './icons/arrow-right.svg';
// eslint-disable-next-line react/prop-types
const BtnSlider = ({ direction, movSlide }) => {
    // console.log(direction,movSlide);
    return (
        <button onClick={movSlide} className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}>

            <img src={direction === "next" ? rightArrow : leftArrow} alt="" />

        </button>
    );
};

export default BtnSlider;
