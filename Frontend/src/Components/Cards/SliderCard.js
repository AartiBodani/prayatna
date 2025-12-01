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
      content: "You can find Education related NGO",
    },
    {
      image:
        "https://i.pinimg.com/564x/9f/a5/44/9fa54453df88d2cc88690d5985034f4f.jpg",
      title: "Food",
      content: "Card content 2",
    },
    {
      image:
        "https://i.pinimg.com/564x/6c/de/6b/6cde6b54ce109e9d808eb541b24d14f8.jpg",
      title: "scholarship",
      content: "Card content 3",
    },
    {
      image:
        "https://i.pinimg.com/564x/98/4e/79/984e79a628a8ca5c3d11952152c62587.jpg",
      title: "Selter",
      content: "Card content 2",
    },
    {
      image:
        "https://i.pinimg.com/564x/08/f4/74/08f474e4749c6b1a17eee0cfe4eef85a.jpg",
      title: "Oldage home",
      content: "Card content 3",
    },
    {
      image:
        "https://i.pinimg.com/564x/ba/d5/6e/bad56e1f085f142d9d0a9ad06a380ab3.jpg",
      title: "Animal Reque",
      content: "Card content 3",
    },
    {
      image:
        "https://i.pinimg.com/564x/16/f7/cd/16f7cda9a9cb29425b3a370a2046334b.jpg",
      title: "Medical",
      content: "Card content 3",
    },
    {
      image:
        "https://i.pinimg.com/474x/09/b5/03/09b503d551965f1fc40c5948d15ab5e3.jpg",
      title: "Others",
      content: "Card content 3",
    },
  ]);
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
        <h1 className="h1_title" sx={{ color: "#13005A" }}>
          Helping Hands
        </h1>
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
                <p className="text-center">{card.content}</p>
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
