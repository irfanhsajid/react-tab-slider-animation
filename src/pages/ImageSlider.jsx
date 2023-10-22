import { useState } from 'react';
import BtnSlider from '../components/Buttons/BtnSlider';
import sliderDetails from '../dataSlider';

const ImageSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % sliderDetails.length);
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + sliderDetails.length) % sliderDetails.length);
    };

    const moveDot = (index) => {
        setSlideIndex(index)
    }

    const styles = {
        backgroundImage: sliderDetails[slideIndex].backgroundImage,
        color: sliderDetails[slideIndex].titleColor,
    };

    return (
        <div>
            <h1> 2. React Image Slider</h1>

            <div className="container">
                <div className="slider-container" style={styles}>
                    <div className="img-container">
                        <img src={sliderDetails[slideIndex].img} alt={`${slideIndex + 1}image`} />
                        <h1 style={{ color: sliderDetails[slideIndex].titleColor }}>*{sliderDetails[slideIndex].title}*</h1>
                        <p>{sliderDetails[slideIndex].details}</p>
                    </div>
                    <BtnSlider movSlide={nextSlide} direction="next" />
                    <BtnSlider movSlide={prevSlide} direction="prev" />
                    <div className="container-dots">
                        {
                            Array.from({ length: 5 }).map((item, index) => (
                                <div 
                                    style={{cursor:"pointer"}}
                                    key={index}
                                    className={slideIndex === index ? "dot-active" : "dot"}
                                    onClick={() => moveDot(index)}
                                >
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
