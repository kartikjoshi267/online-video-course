import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import "./ImageSlider.css"

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  const style_property = document.head.appendChild(document.createElement("style"));
  style_property.innerHTML = ".slick-arrow:before {font-size: 50px; }";
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", position: "absolute",
        top: "50%", left: "30px", zIndex: "2", fontSize: "50px"
      }}
      onClick={onClick}
    />
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", top: " 50%", position: "absolute"
        , right: "55px",
      }}
      onClick={onClick}
    />
  )
}

function ImageSlider() {
  let settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const imgs = [
    {
      link: "https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405__480.png",
      id: 1,
    },
    {
      link: "https://m.media-amazon.com/images/I/71HVyMMRdqL._SX3000_.jpg",
      id: 2,
    },
    {
      link: "https://m.media-amazon.com/images/I/71WAmF2h74L._SX3000_.jpg",
      id: 3,
    },
  ]
  return (
    <div className='home'>
      <Carousel {...settings}>
        {imgs.map((img) => {
          return (
            <Wrap>
              <a href='#'>
                <img src={img.link} alt="" />
              </a>
            </Wrap>
          );
        })}
      </Carousel>
    </div>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  position: relative;
    display: block;
    img {
      width: 100%;
      height: 89.41vh;
      
    }
`;