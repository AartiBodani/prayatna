import React from "react";
import "./WorksInfo.css";
import Info_image from "../../../Images/HeroImage-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <>
      <div className="container-fluid">
        <h2 className="work_title text-center p-2 ">
          We are an NGO dedicated to improving the lives of children in
          underprivileged communities.
        </h2>
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-12 p-4">
            {/* <h3 className="text-left">Why Prayatna ?</h3> */}
            <h4>Together, let's help each other </h4>
            <p className="work_info">
              <spane>
                We visited various NGO websites and found that they were doing
                only certain activities.
                <br />
                They have faced the issue of finding a provider or NGO as per
                their needs.
                <br />
                people must have to visit different NGO to take help from them.
                <br />
                People have to visit various NGO websites to find the perfect
                one.
              </spane>
            </p>
            <p className="work_info">
              Our work would not be possible without the support of our donors,
              volunteers, and staff. We are grateful for their commitment to our
              cause and their dedication to making a difference in the lives of
              children.
            </p>
            <Link to="/showfeedback">
              {/* <button type="button" class="work_btn btn-secondary btn-sm">
                MORE ACTIVITY
              </button> */}
              <Button variant="contained">FeedBack</Button>
            </Link>
          </div>
          <div className="col-sm-12 col-lg-6 col-12 p-4 ">
            <img src={Info_image} alt="info_image" className="work-pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
