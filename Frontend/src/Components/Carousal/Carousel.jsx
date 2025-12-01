import React from "react";
import pic1 from "../../Images/caro_1.jpg";
import pic2 from "../../Images/caro_2.jpg";
import pic3 from "../../Images/caro_3.jpg";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{zIndex:"1"}}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src={pic1}
              className="d-block w-100"
              style={{height:"650px"}}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{color:"white",fontWeight:"bold"}}>We Need Your Support</h1>
              <p style={{fontSize:"18px"}}>
                To Feed And Educate
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={pic3}
              className="d-block w-100"
              style={{height:"650px"}}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{color:"#1f1f1f",fontWeight:"bold"}}>Better Life For People</h1>
              <p style={{fontSize:"18px",color:"#1f1f1f"}}>
                Forget what you can get and see what you can give.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={pic2}
              className="d-block w-100"
              style={{height:"650px"}}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{color:"white",fontWeight:"bold"}}>Give a Little.Change a Lot.</h1>
              <p style={{fontSize:"18px"}}>
                Let's Make world Better Place
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
