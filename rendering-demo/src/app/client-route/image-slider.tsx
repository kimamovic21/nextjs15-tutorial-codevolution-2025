'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
  };

  return (
    <div className='m-10 image-slider-container'>
      <Slider {...settings}>
        <div>
          <img src='https://picsum.photos/400/200' />
        </div>
        <div>
          <img src='https://picsum.photos/400/200' />
        </div>
        <div>
          <img src='https://picsum.photos/400/200' />
        </div>
        <div>
          <img src='https://picsum.photos/400/200' />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;