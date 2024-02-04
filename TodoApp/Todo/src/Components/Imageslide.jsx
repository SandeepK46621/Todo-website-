import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img style={{width:"100vw" , height:"70vh"}} src="https://wallpapercave.com/wp/wp12696901.jpg" alt="Image 1" />
      </div>
      <div>
        <img style={{width:"100vw" , height:"70vh"}} src="https://wallpapercave.com/wp/wp7881177.jpg" alt="Image 2" />
      </div>
      <div>
        <img style={{width:"100vw" , height:"70vh"}} src="https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;
