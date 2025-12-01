import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliiderCard.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Button } from "bootstrap";

// import Education from "../../image/education.jpg";

const SliderCard = () => {
  const [cards] = useState([
    {
      image:
        "https://i.pinimg.com/564x/56/2d/43/562d4333bff89365381b587c2810ec24.jpg",
      title: "Education",
      content:
        "Education is the most powerful weapon we can use to change the world",
    },
    {
      image:
        "https://i.pinimg.com/564x/52/ff/c3/52ffc35c0aca6dea4a0b3f9e32093e1d.jpg",
      title: "Food",
      content: "Good food is the foundation of genuine happiness",
    },
    {
      image:
        "https://i.pinimg.com/474x/64/ad/cd/64adcd39ac3409ebf2fdc83a52ee6df5.jpg",
      title: "scholarship",
      content:
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today",
    },
    {
      image:
        "https://i.pinimg.com/564x/17/39/2c/17392c6e1ee452e13927796c1f446fc7.jpg",
      title: "Shelter",
      content:
        "Shelter is a basic human need, and everyone deserves a place to call home",
    },
    {
      image:
        "https://i.pinimg.com/564x/b8/d9/fc/b8d9fca928b5b5ddf0fd7176e2123497.jpg",
      title: "Oldage home",
      content:
        "Aging is not lost youth but a new stage of opportunity and strength",
    },
    {
      image:
        "https://i.pinimg.com/564x/4a/6c/3c/4a6c3cbcf5d7b6696a9a1f5d6fce2c4a.jpg",
      title: "Animal Care",
      content:
        "Animals are not just a part of this world, they're the purest form of nature",
    },
    {
      image:
        "https://i.pinimg.com/474x/3d/85/40/3d8540303f5d09354ccbe2a05bf41846.jpg",
      title: "Medical",
      content:
        "Health is a state of complete physical, mental and social well-being, not merely the absence of disease or infirmity",
    },
    {
      image:
        "https://i.pinimg.com/474x/87/97/8f/87978f120ee019f2cfaff94a6b2febd6.jpg",
      title: "Others",
      content:
        "Being human is not about being perfect, it's about being honest, humble, and kind",
    },
  ]);
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 500,
    arrow: true,
    // slidesToShow: 3,
    slidesToShow: isSmDown ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="sl_title mt-5 py-5">
        <h1 className="h1">Helping Hands</h1>
        <p>You can find Different types of activities related NGOs</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          maxHeight: "400px",
        }}
      >
        <div
          style={{
            width: "70vw",
            marginTop: "10px",
            maxHeight: "80vh",
          }}
        >
          <Slider {...settings}>
            {cards.map((card, i) => (
              <div className="sl_imageContainer">
                <h2 className="h2 text-center">{card.title}</h2>
                <img className="sl_image" src={card.image} alt={card.title} />
                {/* <p className="text-center">{card.content}</p> */}
              </div>
              // <div className="sl_flip-card">
              //   <div className="sl_flip-card-inner">
              //     <div class="sl_flip-card-front">
              //       <img
              //         src={card.image}
              //         className="sl_image"
              //         alt="cards"
              //       />
              //     </div>
              //     <div className="sl_flip-card-back">
              //       <h1>Education</h1>
              //       <p>Architect & Engineer</p>
              //       <p>We love that guy</p>
              //       <button className="sl_button sl_button_radius">Submit</button>
              //     </div>
              //   </div>
              // </div>
            ))}
          </Slider>
        </div>
        {/* <div
          style={{ height: "350px", position: "absolute", left: 0, zIndex: -1 }}
        >
          <img src={"demo"} style={{ height: "100%" }} alt="logo" />
        </div> */}
        {/* <div
          style={{
            height: "350px",
            position: "absolute",
            right: 0,
            zIndex: -1,
          }}
        >
          <img src={"demo1"} style={{ height: "100%" }} alt="logo" />
        </div> */}
      </div>
    </>
  );
};

export default SliderCard;
