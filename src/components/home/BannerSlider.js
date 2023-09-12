import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
  
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '350px',
}
const slideImages = [

  {
    src: 'images/main-banner.jpg',
    caption: 'Slider Image - 3'
  },
  {
    src: 'images/main-banner-1.jpg',
    caption: 'Slider Image -4'
  },
  {
    src: 'images/tab1.jpg',
    caption: 'Slider Image - 5'
  },
  {
    src: 'images/test-slide.jpg',
    caption: 'Slider Image - 6'
  },
];

const BannerSlider = () => {
  return (
    <section className='home-wraper-1 py-3'>
      <div className='container '>
        <div className='row'>
          <div className='col-12'>
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.src})` }}>
                    <span style={spanStyle}>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSlider