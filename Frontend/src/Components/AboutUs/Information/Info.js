import React from "react";
import "./Info.css";
import Info_image from "../../../Images/info1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Info = () => {
  return (
    <>
      <div className="container-fluid info_title">
        <h1 className="text-center p-2">More Information</h1>
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-12 p-4">
            <p className="info">
              Our mission is to provide access to education, healthcare, and
              basic needs to children who would otherwise go without. We believe
              that every child deserves a chance to reach their full potential,
              regardless of their background or circumstances.
            </p>
            <p className="info">
              Founded in 2010, we have grown to serve over 10,000 children
              across the world. We partner with local organizations and
              community leaders to ensure that our programs are sustainable and
              effective.
            </p>
            <p className="info">
              Our work would not be possible without the support of our donors,
              volunteers, and staff. We are grateful for their commitment to our
              cause and their dedication to making a difference in the lives of
              children.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 col-12 p-4 ">
            <img src={Info_image} alt="info_image" className="info-pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
