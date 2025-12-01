import { Button, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import "./Showfeedback.css";
import avtar from "../../../Images/img_avatar.png";

const Showfeedback = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/feedback")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container ">
        <h4 className="text-center mt-4 sh_main_title">FeedBack Reviews</h4>
        <Link to="/feedback" style={{ textDecoration: "none" }}>
          <div className="feed_addbtn">
            <Button
              variant="contained"
              sx={{
                marginTop: "10px",
                marginBottom: "20px",
              }}
              startIcon={<AddIcon />}
            >
              Give Feedback
            </Button>
          </div>
        </Link>
        <div className="row">
          {data.map((curNgo) => {
            const { _id, user_name, message, rating } = curNgo;
            return (
              <div className="col-12 col-sm-6 col-lg-4 mt-1">
                <div className="card sh_card mb-3" key={_id}>
                  <div className="team_img-container d-flex">
                    <img src={avtar} alt="jainam" />
                    <h4 className="card-title  sh_title">{user_name}</h4>
                  </div>
                  <div className="card-body  shadow">
                    <p className="card-text sh_text">{message}</p>
                    <div className="feed_from-row">
                      <div className="rate_control">
                        <Rating
                          name="simple-controlled"
                          readOnly
                          value={rating}
                        />
                      </div>
                    </div>
                    {/* <p className="card-text sh_text">
                      <b>Rating :</b>
                      {rating}
                    </p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Showfeedback;
