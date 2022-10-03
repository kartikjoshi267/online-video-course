import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import "../VideoSession/VideoSession.css";

function LatestCourse() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
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
          link: "https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405__480.png",
          id: 3,
        },
        {
          link: "https://m.media-amazon.com/images/I/71HVyMMRdqL._SX3000_.jpg",
          id: 4,
        },
        {
            link: "https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405__480.png",
            id: 5,
          },
        {
          link: "https://m.media-amazon.com/images/I/71WAmF2h74L._SX3000_.jpg",
          id: 6,
        },
      ]
  return (
    <div className='home1'>
         <Carousel {...settings}>
          {imgs.map((img) => {
                  return (
                    <Wrap>
                        <img src={img.link} alt=""/>
                  </Wrap>
                  );
                })}
        </Carousel>
    </div>
  )
}

export default LatestCourse

const Carousel = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }
`;

const Wrap = styled.div`
  position: relative;
    display: block;
    img {
        width: 300px;
        height: 200px;
        margin: 20px;
    }
`;