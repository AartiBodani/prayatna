import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DoneIcon from "@mui/icons-material/Done";
import Logo from "../../Images/Prayatan.png";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid footer-container">
        <div className="container f-first-container">
          <div className="f-first-container-content">
            <h2 className="text-center" style={{ marginTop: "17px" }}>
              Register Your NGO with Us
            </h2>
            <div className=" f-heading-content">
              <p className=" ">
                <DoneIcon />
                Free To Use
              </p>
              <p className=" ">
                <DoneIcon />
                Ease To Find
              </p>
              <p className="">
                <DoneIcon />
                Help To Others
              </p>
            </div>
            <Link to="/volunteer" style={{ textDecoration: "none" }}>
              {/* <button type="submit" className="text-center f-btn-register">
              Register NGO
            </button> */}
              <Button
                variant="contained"
                color="primary"
                sx={{ fontSize: "18px", marginTop: "8px" }}
              >
                Be come Volunteer
              </Button>
            </Link>
          </div>
        </div>
        <div className="f-second-container container-fluid">
          <div className="row m-3" style={{ width: "100%" }}>
            <div className="col-lg-3  col-md-6 col-sm-12 f-mission-container">
              <img
                src={Logo}
                alt="Logo Of prayatna"
                width="170px"
                className="mt-2"
              />
              <h3 className="mt-3">Our Mission</h3>
              <p className="mt-2">
                We provide direct communication between people and NGO,One of
                the better ways to help poor and needy people is to give than
                hand up and hand out.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 f-quick-access">
              <h3>Quick Access</h3>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/about"
              >
                About Us
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/contact"
              >
                Contact Us
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/search"
              >
                Search
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/guide"
              >
                Guide
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 f-activity-container">
              <h3>Activities</h3>
              <ul>
                <li>Education</li>
                <li>Selter</li>
                <li>Food</li>
                <li>Funding</li>
                <li>Hospital</li>
                <li>Etc...</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 f-follow-container">
              <h3>Follow Us</h3>
              <div>
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
